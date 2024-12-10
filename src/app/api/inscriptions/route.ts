import { NextResponse } from 'next/server'
import { JWT } from 'google-auth-library'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { generateResponseBody } from '@/utils'
import { GoogleSheetColumn } from '@/types'
import { instanciateNewInscriptionRow } from '@/utils/inscriptions.util'
import { Bot } from 'grammy'

// telegram
const token = process.env.TELEGRAM_BOT_TOKEN
if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')
const channelId = String(process.env.TELEGRAM_CHANNEL_ID)
if (!channelId) throw new Error('TELEGRAM_CHANNEL_ID environment variable not found.')

export async function POST(request: Request): Promise<NextResponse> {
    // prepare the response object
    const responseBody = generateResponseBody<unknown>()
    const body = await request.json()
    const newInscriptionRow = instanciateNewInscriptionRow()
    const requiredValues = Object.keys(newInscriptionRow) as GoogleSheetColumn[]

    try {
        /**
         * parse and validate params
         */

        // prevent errors
        if (!body) {
            responseBody.error = `Paramètres incorrects.`
            return NextResponse.json(responseBody, { status: 400 })
        }

        // validate params
        for (let requiredValueIndex = 0; requiredValueIndex < requiredValues.length; requiredValueIndex++) {
            const key = requiredValues[requiredValueIndex]
            const value = String(body[key] ?? '').trim()
            if (!value || value.length < 3) {
                responseBody.error = `La valeur '${String(key)}' est requise et doit être de minimum 3 lettres.`
                return NextResponse.json(responseBody, { status: 400 })
            } else newInscriptionRow[key] = value
        }

        /**
         * instanciate client
         */

        // initialize jwt with credentials
        const jwt = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_CREDS_CLIENT_EMAIL,
            key: process.env.GOOGLE_SERVICE_ACCOUNT_CREDS_PRIVATE_KEY,
            scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
        })

        // initialize google spreadsheet
        const doc = new GoogleSpreadsheet(String(process.env.GOOGLE_SHEET_ID), jwt)

        // authenticate and load the spreadsheet
        await doc.loadInfo()

        // get the first sheet
        // const sheet = doc.sheetsByIndex[0]
        const sheet = doc.sheetsById[0]

        /**
         * push row
         */

        // insert row into the sheet
        await sheet.addRow(newInscriptionRow)
        responseBody.success = true

        /**
         * telegram
         */

        const bot = new Bot(String(token))
        const message = [
            `Nouvelle inscription\n`,
            ...Object.entries(newInscriptionRow).map(
                ([entryKey, entryValue], index) =>
                    `${String(index + 1).padStart(2, ' ')}. ${entryKey.replaceAll('_', ' ')}: <b>${JSON.stringify(entryValue)}</b>`,
            ),
            `\n<blockquote expandable>${JSON.stringify(body)}</blockquote>`,
        ]
            .filter((line) => !!line)
            .join('\n')
        await bot.api.sendMessage(channelId, message, { parse_mode: 'HTML' })

        // end
        return NextResponse.json(responseBody, { status: 200 })
    } catch (error) {
        console.error('Error adding row to sheet:', error)

        /**
         * telegram
         */

        const bot = new Bot(String(token))
        const message = [`Erreur inscription\n`, `\n<blockquote expandable>${JSON.stringify(error)}</blockquote>`].filter((line) => !!line).join('\n')
        await bot.api.sendMessage(channelId, message, { parse_mode: 'HTML' })

        // end
        responseBody.error = 'Internal server error.'
        return NextResponse.json(responseBody, { status: 500 })
    }
}
