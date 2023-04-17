import { FilterValues, ICardGen, MainPageInfo } from '../types'
import { ICharacter } from '../../api/rickandmortyapi'

type ActionMap<M extends { [index: string]: unknown }> = {
    [Key in keyof M]: {
        type: Key
        payload: M[Key]
    }
}

export enum Actions {
    ADD_FORM_CARD = 'ADD_FORM_CARD',
    SET_MAIN_CARD = 'SET_MAIN_CARD',
    SET_FILTER_CARD = 'SET_FILTER_CARD',
    SET_MAIN_PAGE_INFO = 'SET_MAIN_PAGE_INFO',
}

type FormCardType = ICardGen

type FormCardPayload = {
    [Actions.ADD_FORM_CARD]: ICardGen
}

export type FormCardActions =
    ActionMap<FormCardPayload>[keyof ActionMap<FormCardPayload>]

export const formCardsReducer = (
    state: FormCardType[],
    action: FormCardActions
) => {
    switch (action.type) {
        case Actions.ADD_FORM_CARD: {
            const { title, date, category, streaming, poster } = action.payload
            return [...state, { title, date, category, streaming, poster }]
        }
        default:
            return state
    }
}

type MainCardType = ICharacter[]

type MainCardPayload = {
    [Actions.SET_MAIN_CARD]: ICharacter[]
}

export type MainCardActions =
    ActionMap<MainCardPayload>[keyof ActionMap<MainCardPayload>]

export const mainCardsReducer = (
    state: MainCardType,
    action: MainCardActions
) => {
    switch (action.type) {
        case Actions.SET_MAIN_CARD:
            return action.payload

        default:
            return state
    }
}

type FilterCardType = FilterValues

export type FilterCardActions = {
    type: Actions.SET_FILTER_CARD
    payload: FilterCardType
}

export const filterCardsReducer = (
    state: FilterCardType,
    action: FilterCardActions
) => {
    switch (action.type) {
        case Actions.SET_FILTER_CARD:
            return action.payload
        default:
            return state
    }
}

type MainPageInfoType = MainPageInfo

export type MainPageInfoActions = {
    type: Actions.SET_MAIN_PAGE_INFO
    payload: Partial<MainPageInfoType>
}

export const mainPageInfoReducer = (
    state: MainPageInfoType,
    action: MainPageInfoActions
) => {
    switch (action.type) {
        case Actions.SET_MAIN_PAGE_INFO:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
export type CollectedActions =
    | FormCardActions
    | MainCardActions
    | FilterCardActions
    | MainPageInfoActions
