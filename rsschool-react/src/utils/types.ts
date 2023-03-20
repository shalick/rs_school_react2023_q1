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

export type EmptyProps = Record<string, never>
