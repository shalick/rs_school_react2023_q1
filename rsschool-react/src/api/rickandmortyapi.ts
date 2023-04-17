import axios from 'axios'

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
    needAllData?: boolean
}

export type GetAllData = {
    query: string
    pages: number
    data: IFilteredCharacter
    onRequestData: (data: IFilteredCharacter) => void
    onError: (error: string) => void
}

const BASE = 'https://rickandmortyapi.com/api/'

export const CHARACTER = `${BASE}character/`

const getAllData = ({
    query,
    pages,
    data,
    onRequestData,
    onError,
}: GetAllData) => {
    let results = [...data.results]
    const urlArray = Array.from(
        { length: pages - 1 },
        (_, k) => `${query}&page=${k + 2}`
    )

    Promise.all(urlArray.map((item) => axios.get(item)))
        .then((resolvedArray) =>
            resolvedArray.forEach(
                ({ data }) => (results = [...results, ...data.results])
            )
        )
        .catch(() => onError('Wooops! Something went wrong'))
        .then(() => onRequestData({ ...data, results }))
        .catch(() => onError('Wooops! Something went wrong'))
}

export const getFilterUrl = ({
    searchWord,
    status,
    gender,
    species,
}: {
    [x: string]: string
}) =>
    `${CHARACTER}?name=${searchWord}&status=${status}&gender=${gender}&species=${species}`

export const createRequest = (config: CreateRequestConfig) => {
    const { query, onRequestData, onError, onRequestEnd } = config
    axios
        .request({
            headers: { 'Content-type': 'application/json' },
            baseURL: `${CHARACTER}?name=${query.toLowerCase()}`,
        })
        .then(({ data }) => {
            data.info.next
                ? getAllData({
                      query,
                      pages: data.info.pages,
                      data,
                      onRequestData,
                      onError,
                  })
                : onRequestData(data)
        })
        .catch(({ response }) => {
            if (response.status === 404) onError(response.data.error)
            else if (response.status >= 500)
                onError('Sorry! Our server is busy. Try later please')
            else onError('Wooops! Something went wrong')
        })
        .finally(() => onRequestEnd && onRequestEnd())
}
