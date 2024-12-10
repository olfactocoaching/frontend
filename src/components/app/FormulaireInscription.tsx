'use client'

import { APP_PHOTOS, root } from '@/config/app.config'
import { FunctionReturn, InscriptionInputs } from '@/types'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import SectionTitle from './SectionTitle'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { cn, defaultAlt, extractErrorMessage, getPageConfig, instanciateNewInscriptionRow } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import Image from 'next/image'

export default function FormulaireInscription({
    prerequisNecessaire = false,
    ...props
}: {
    cursus: string
    dates: string
    prerequisNecessaire: boolean
}) {
    // -
    const [inscriptionEnCours, setInscriptionEnCours] = useState(false)
    const [inscriptionEnvoyee, setInscriptionEnvoyee] = useState(false)

    // form hook
    const {
        register,
        handleSubmit,
        // formState,
        setValue,
        watch,
        formState: { errors, isValid },
    } = useForm<InscriptionInputs>({
        mode: 'onChange', // ensure form validation happens on every change
        defaultValues: {
            prenom: '',
            nom: '',
            adresse: '',
            codePostal: '',
            ville: '',
            pays: '',
            telephone: '',
            email: '',
            prerequis: '',
            cursusOlfactotherapieDejaSuivis: false,
            cursusOlfactotherapieSuivis: [],
            cursusOlfactocoachingDejaSuivis: false,
            cursusOlfactocoachingSuivis: [],
            message: '',
        },
    })

    // -
    useEffect(() => {
        if (isValid) console.log('Form is valid!')
        else console.log('Form is invalid!', { errors })
    }, [isValid, errors])

    // watch all field values
    const allValues = watch()

    // handle submit
    const onSubmit: SubmitHandler<InscriptionInputs> = async (data) => {
        // state
        setInscriptionEnCours(true)

        try {
            // prepare
            const newInscriptionRow = instanciateNewInscriptionRow()
            newInscriptionRow.Cursus = props.cursus
            newInscriptionRow.Dates = props.dates
            newInscriptionRow.Prénom = data.prenom
            newInscriptionRow.Nom = data.nom
            newInscriptionRow.Adresse = data.adresse
            newInscriptionRow['Code Postal'] = data.codePostal
            newInscriptionRow.Ville = data.ville
            newInscriptionRow.Pays = data.pays
            newInscriptionRow.Téléphone = data.telephone
            newInscriptionRow.Email = data.email
            newInscriptionRow.Profession = data.profession
            newInscriptionRow.Prérequis = data.profession
            newInscriptionRow.Cursus_Olfactotherapie_Deja_Suivis = data.cursusOlfactotherapieDejaSuivis ? 'Oui' : 'Non'
            newInscriptionRow.Cursus_Olfactotherapie_Suivis = data.cursusOlfactotherapieDejaSuivis
                ? data.cursusOlfactotherapieSuivis.length
                    ? data.cursusOlfactotherapieSuivis.join(', ')
                    : 'Pas de réponse'
                : 'Aucun'
            newInscriptionRow.Cursus_Olfactocoaching_Deja_Suivis = data.cursusOlfactocoachingDejaSuivis ? 'Oui' : 'Non'
            newInscriptionRow.Cursus_Olfactocoaching_Suivis = data.cursusOlfactocoachingDejaSuivis
                ? data.cursusOlfactocoachingSuivis.length
                    ? data.cursusOlfactocoachingSuivis.join(', ')
                    : 'Pas de réponse'
                : 'Aucun'
            newInscriptionRow.Message = data.message

            // send POST request
            const postInscriptionResponse = await fetch(`${root}/api/inscriptions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newInscriptionRow),
            })
            const inscription = (await postInscriptionResponse.json()) as FunctionReturn<unknown>
            console.log({ inscription })
            if (inscription.success) setInscriptionEnvoyee(true)
        } catch (error) {
            alert(
                `Un problème est survenu à la réception de votre inscription. Veuillez contacter l'équipe svp.\n\nErreur: ${extractErrorMessage(error)}`,
            )
        } finally {
            setInscriptionEnCours(false)
        }
    }

    // -
    const inputClassNames =
        'h-fit flex w-full grow gap-2 rounded-md border-2 border-light-hover bg-transparent px-2 py-1.5 ring-0 ring-transparent border focus:border-primary focus:bg-transparent placeholder:text-gray-300 text-secondary font-bold'

    // -
    const requiredMessage = (field: string, details?: boolean) => `Merci d'indiquer ${field}${details ? ' (entre 3 et 30 caractères)' : ''}`

    return (
        <>
            <SectionTitle title="1. Formulaire d'inscription" />
            <form onSubmit={handleSubmit(onSubmit)} className="grid w-full grid-cols-1 gap-3 px-2 text-base lg:grid-cols-2 xl:grid-cols-4">
                {/* Prénom */}
                <div className="flex flex-col gap-1 xl:col-span-2">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Prénom</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        type="text"
                        placeholder="Votre prénom"
                        {...register('prenom', { required: true, minLength: 3, maxLength: 30 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.prenom && <span className="text-quaternary">{requiredMessage('votre prénom', true)}</span>}
                </div>

                {/* Nom */}
                <div className="flex flex-col gap-1 xl:col-span-2">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Nom</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        type="text"
                        placeholder="Votre nom"
                        {...register('nom', { required: true, minLength: 3, maxLength: 30 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.nom && <span className="text-quaternary">{requiredMessage('votre nom', true)}</span>}
                </div>

                {/* Adresse */}
                <div className="col-span-1 flex flex-col gap-1 lg:col-span-2">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Adresse</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        type="text"
                        placeholder="Votre adresse"
                        {...register('adresse', { required: true, maxLength: 50 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.adresse && <span className="text-quaternary">{requiredMessage('votre adresse', true)}</span>}
                </div>

                {/* Code postal */}
                <div className="flex flex-col gap-1">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Code postal</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        placeholder="Votre code postal"
                        {...register('codePostal', { required: true, maxLength: 10 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.codePostal && <span className="text-quaternary">{requiredMessage('votre code postal', true)}</span>}
                </div>

                {/* Ville */}
                <div className="flex flex-col gap-1">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Ville</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        placeholder="Votre ville"
                        {...register('ville', { required: true, minLength: 3, maxLength: 30 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.ville && <span className="text-quaternary">{requiredMessage('votre ville', true)}</span>}
                </div>

                {/* Pays */}
                <div className="flex flex-col gap-1">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Pays</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        placeholder="Votre pays"
                        {...register('pays', { required: true, minLength: 3, maxLength: 30 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.pays && <span className="text-quaternary">{requiredMessage('votre pays', true)}</span>}
                </div>

                {/* Télephone. */}
                <div className="flex flex-col gap-1">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*']">Téléphone</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        placeholder="Votre téléphone"
                        {...register('telephone', { required: true, maxLength: 20 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.telephone && <span className="text-quaternary">{requiredMessage('votre Téléphone')}</span>}
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-1 xl:col-span-2">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">E-mail</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        type="text"
                        placeholder="Votre e-mail"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Merci de renseigner un email valide',
                            },
                        })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.email && <span className="text-quaternary">{errors.email.message}</span>}
                </div>

                {/* Profession */}
                <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Profession</p>
                    <input
                        disabled={inscriptionEnvoyee}
                        autoComplete="off"
                        type="text"
                        placeholder="Votre profession"
                        {...register('profession', { required: true, minLength: 3, maxLength: 30 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.profession && <span className="text-quaternary">{requiredMessage('votre profession', true)}</span>}
                </div>

                {/* Prerequis */}
                {prerequisNecessaire && (
                    <>
                        <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                            <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Prérequis suivi</p>
                            <select
                                {...register('prerequis', { required: true })}
                                disabled={inscriptionEnCours || inscriptionEnvoyee}
                                className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                            >
                                {[AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE, AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE].map((prerequis) => (
                                    <option key={prerequis} value={getPageConfig(prerequis).pageTitle} className="p-1">
                                        {getPageConfig(prerequis).pageTitle}
                                    </option>
                                ))}
                            </select>
                            {errors.prerequis && <span className="text-quaternary">{requiredMessage('quel prérequis avez-vous suivi', false)}</span>}
                        </div>

                        {/* Cursus Olfactothérapie */}
                        <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                            <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">
                                Avez-vous suivi le cursus d'
                                <LinkWrapper
                                    href="https://www.olfactotherapie.com/formation-d-olfactotherapie/"
                                    target="_blank"
                                    className="cta-link-style"
                                >
                                    Olfactothérapie
                                </LinkWrapper>{' '}
                                ?
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setValue('cursusOlfactotherapieDejaSuivis', true)}
                                    disabled={inscriptionEnCours || inscriptionEnvoyee}
                                    className={cn('flex w-full rounded-md border-2 border-light-hover px-2 py-1.5', {
                                        'text-secondary border-secondary': allValues.cursusOlfactotherapieDejaSuivis,
                                    })}
                                >
                                    <p className="mx-auto">Oui</p>
                                </button>
                                <button
                                    onClick={() => {
                                        setValue('cursusOlfactotherapieDejaSuivis', false)
                                        setValue('cursusOlfactotherapieSuivis', [])
                                    }}
                                    disabled={inscriptionEnCours || inscriptionEnvoyee}
                                    className={cn('flex w-full rounded-md border-2 border-light-hover px-2 py-1.5', {
                                        'text-secondary border-secondary': !allValues.cursusOlfactotherapieDejaSuivis,
                                    })}
                                >
                                    <p className="mx-auto">Non</p>
                                </button>
                            </div>
                        </div>

                        {/* Quels stages deja suivis */}
                        {allValues.cursusOlfactotherapieDejaSuivis && (
                            <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                                <p className="after:ml-0.5 after:text-red-500 after:content-['*']">Si oui, jusqu'à quel degré ?</p>
                                <div className="col-span-1 grid w-full grid-cols-2 gap-2 lg:col-span-2 lg:grid-cols-4">
                                    {['1er', '2ème', '3ème', '4ème', '5ème', '6ème', '7ème'].map((degre) => (
                                        <button
                                            key={degre}
                                            disabled={inscriptionEnCours || inscriptionEnvoyee}
                                            onClick={() => {
                                                if (allValues.cursusOlfactotherapieSuivis.includes(degre)) {
                                                    setValue(
                                                        'cursusOlfactotherapieSuivis',
                                                        allValues.cursusOlfactotherapieSuivis.filter((degreToFilter) => degreToFilter !== degre),
                                                    )
                                                } else setValue('cursusOlfactotherapieSuivis', [...allValues.cursusOlfactotherapieSuivis, degre])
                                            }}
                                            className={cn('flex w-full rounded-md border-2 border-light-hover px-2 py-1.5', {
                                                'text-secondary border-secondary': allValues.cursusOlfactotherapieSuivis.includes(degre),
                                            })}
                                        >
                                            <p className="mx-auto">
                                                {degre} degré:{' '}
                                                <span className="font-bold">
                                                    {allValues.cursusOlfactotherapieSuivis.includes(degre) ? 'Oui' : 'Non'}
                                                </span>
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Cursus Olfactocoaching */}
                        <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                            <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Avez-vous effectué un stage Olfactocoaching ?</p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    disabled={inscriptionEnCours || inscriptionEnvoyee}
                                    onClick={() => setValue('cursusOlfactocoachingDejaSuivis', true)}
                                    className={cn('flex w-full rounded-md border-2 border-light-hover px-2 py-1.5', {
                                        'text-secondary border-secondary': allValues.cursusOlfactocoachingDejaSuivis,
                                    })}
                                >
                                    <p className="mx-auto">Oui</p>
                                </button>
                                <button
                                    disabled={inscriptionEnCours || inscriptionEnvoyee}
                                    onClick={() => {
                                        setValue('cursusOlfactocoachingDejaSuivis', false)
                                        setValue('cursusOlfactocoachingSuivis', [])
                                    }}
                                    className={cn('flex w-full rounded-md border-2 border-light-hover px-2 py-1.5', {
                                        'text-secondary border-secondary': !allValues.cursusOlfactocoachingDejaSuivis,
                                    })}
                                >
                                    <p className="mx-auto">Non</p>
                                </button>
                            </div>
                        </div>

                        {/* Quels stages deja suivis */}
                        {allValues.cursusOlfactocoachingDejaSuivis && (
                            <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                                <p className="after:ml-0.5 after:text-red-500 after:content-['*']">Si oui, lequel / lesquels ?</p>
                                <div className="col-span-1 grid w-full grid-cols-2 gap-2 lg:col-span-2">
                                    {[
                                        getPageConfig(AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL).pageTitle,
                                        getPageConfig(AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS).pageTitle,
                                        getPageConfig(AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS).pageTitle,
                                    ].map((stage) => (
                                        <button
                                            key={stage}
                                            disabled={inscriptionEnCours || inscriptionEnvoyee}
                                            onClick={() => {
                                                if (allValues.cursusOlfactocoachingSuivis.includes(stage)) {
                                                    setValue(
                                                        'cursusOlfactocoachingSuivis',
                                                        allValues.cursusOlfactocoachingSuivis.filter((stageToFilter) => stageToFilter !== stage),
                                                    )
                                                } else setValue('cursusOlfactocoachingSuivis', [...allValues.cursusOlfactocoachingSuivis, stage])
                                            }}
                                            className={cn('flex w-full rounded-md border-2 border-light-hover px-2 py-1.5', {
                                                'text-secondary border-secondary': allValues.cursusOlfactocoachingSuivis.includes(stage),
                                            })}
                                        >
                                            <p className="mx-auto">
                                                {stage}:{' '}
                                                <span className="font-bold">
                                                    {allValues.cursusOlfactocoachingSuivis.includes(stage) ? 'Oui' : 'Non'}
                                                </span>
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}

                {/* Message */}
                <div className="col-span-1 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                    <p className="after:ml-0.5 after:text-red-500 after:content-['*'] ">Message</p>
                    <textarea
                        disabled={inscriptionEnCours || inscriptionEnvoyee}
                        rows={3}
                        placeholder="Votre message"
                        {...register('message', { required: true, minLength: 3, maxLength: 200 })}
                        className={cn(inputClassNames, { 'cursor-not-allowed text-inactive': inscriptionEnvoyee })}
                    />
                    {errors.message && <span className="text-quaternary">{requiredMessage('votre message', false)}</span>}
                </div>

                {/* Submit */}
                {!inscriptionEnvoyee && (
                    <div className="col-span-1 mt-3 flex flex-col gap-1 lg:col-span-2 xl:col-span-4">
                        <button
                            type="submit"
                            disabled={inscriptionEnCours || inscriptionEnvoyee}
                            className={cn(
                                'flex w-full items-center justify-center gap-2.5 rounded-lg border-2 border-light-hover px-3 py-2 font-bold ',
                                { 'text-white bg-primary': isValid },
                                { 'text-light-hover': !isValid && !inscriptionEnCours },
                                { 'text-white bg-quaternary': !isValid && inscriptionEnCours },
                            )}
                        >
                            {inscriptionEnCours ? 'Inscription en cours...' : isValid ? "Je m'inscris" : "Je complète le formulaire pour m'inscrire"}
                        </button>
                    </div>
                )}
            </form>
            {inscriptionEnvoyee ? (
                <div className="my-2 flex w-full flex-col items-center justify-center rounded-lg px-3 py-2 text-xl">
                    <p className="font-bold text-quaternary">
                        Nous avons bien reçu et enregistré votre inscription au nom de {allValues.prenom} {allValues.nom}.
                    </p>
                    <Image
                        src={APP_PHOTOS[AppPhotoIds.OLFACTOCOACHING_FLEUR].src}
                        width={60}
                        height={60}
                        className="mx-auto mt-4 rounded-md object-contain"
                        alt={defaultAlt()}
                    />
                </div>
            ) : null}
            <br />
        </>
    )
}
