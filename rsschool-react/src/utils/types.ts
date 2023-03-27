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

export interface INewCardFormErrors {
    [x: string]: string | undefined
}

// export interface INewCardFormProps {}

export interface INewCardFormRef {
    common: React.RefObject<HTMLFormElement>
    title: React.RefObject<HTMLInputElement>
    date: React.RefObject<HTMLInputElement>
    category: React.RefObject<HTMLSelectElement>
    streaming: React.RefObject<HTMLInputElement>
    watched: React.RefObject<HTMLInputElement>
    poster: React.RefObject<HTMLInputElement>
}

export interface INewCardFormInputProps {
    message?: string
    setError: (x: string) => void
}
