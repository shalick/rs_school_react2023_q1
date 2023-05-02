export type Info = {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

export interface ICharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
}

export interface IFilteredCharacter {
    info: Info
    results: ICharacter[]
}

export type GetAllData = {
    query: string
    pages: number
    data: IFilteredCharacter
}

export type CharacterInfo = {
    count: number
    pages: number
    next: string | null
    prev: string | null
    total: number
    current: number
    newPages: number
}

const BASE = 'https://rickandmortyapi.com/api/'

export const CHARACTER = `${BASE}character/`

export const getFilterUrl = ({
    searchWord,
    status,
    gender,
    species,
}: {
    [x: string]: string
}) =>
    `${CHARACTER}?name=${searchWord}&status=${status}&gender=${gender}&species=${species}`
