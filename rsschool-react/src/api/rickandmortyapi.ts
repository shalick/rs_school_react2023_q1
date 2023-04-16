import axios from 'axios'
// import { CreateRequestConfig, IFilteredCharacter } from './types'
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
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: ICharacter[]
}

export interface CreateRequestConfig {
    query: string
    onRequestData: (data: IFilteredCharacter) => void
    onRequestEnd?: () => void
    onError: (error: string) => void
}

const BASE = 'https://rickandmortyapi.com/api/'

const CHARACTER = `${BASE}character/`

export const createRequest = (config: CreateRequestConfig) => {
    const { query, onRequestData, onError, onRequestEnd } = config
    axios
        .request<IFilteredCharacter>({
            headers: { 'Content-type': 'application/json' },
            baseURL: `${CHARACTER}?name=${query.toLowerCase()}`,
        })
        .then(({ data }) => onRequestData(data))
        .catch(({ response }) => {
            if (response.status === 404) onError(response.data.error)
            else if (response.status >= 500)
                onError('Sorry! Our server is busy. Try later please')
            else onError('Wooops! Something went wrong')
        })
        .finally(() => onRequestEnd && onRequestEnd())
}
