import { UseFormRegister } from 'react-hook-form'
export interface IMovieCard {
    id: number
    poster: string
    name: string
    year: number
    runtime: number
    categories: string[]
    release_date: string
    director: string[]
    writer: string[]
    actors: string[]
    storyline: string
}

export interface IFormCard {
    index: number
    poster: string | null
    title: string
    date: string
    category: string
    streaming: string
    watched: boolean
}

export interface INewCardFormState {
    errors: INewCardFormErrors
    cardIsSaved: boolean
    submitIsDisabled: boolean
}

export interface IFormData {
    title: string
    date: string
    category: string
    streaming: string
    watched: boolean
    poster: string | null
}

export interface IFormDataValues {
    [x: string]: string | boolean | FileList
    title: string
    date: string
    category: string
    streaming: string
    watched: boolean
    poster: FileList
}

export interface INewCardFormErrors {
    [x: string]: string | undefined
}

export interface INewCardFormRef {
    common: React.RefObject<HTMLFormElement>
    title: React.RefObject<HTMLInputElement>
    date: React.RefObject<HTMLInputElement>
    category: React.RefObject<HTMLSelectElement>
    streaming: React.RefObject<HTMLInputElement>
    watched: React.RefObject<HTMLInputElement>
    poster: React.RefObject<HTMLInputElement>
}

type ValidateFunction =
    | ((x: string | null) => boolean)
    | ((x: boolean) => boolean)
    | ((x: FileList | null) => boolean)

export interface FormField {
    name: string
    label?: string
    options?: string[]
    register: {
        validate: Partial<ValidateFunction>
    }
}

export interface INewCardFormInputProps {
    data: FormField
    error?: string
    register: UseFormRegister<IFormDataValues>
    clearErrors: () => void
}

export interface ICardGen {
    title: string
    date: string
    category: string
    streaming: string
    poster: string
}
