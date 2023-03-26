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

export interface INewCardValidationValues {
    movieTitle: string
    date: string
    category: string
    streaming: string
    watched: boolean
    image: File | null
}

export interface INewCardFormErrors {
    [x: string]: string | undefined
}

export interface INewCardFormInputProps {
    message?: string
    setError: (x: string) => void
}
