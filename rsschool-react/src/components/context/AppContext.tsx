import React, { createContext, Dispatch, useReducer } from 'react'
import {
    formCardsReducer,
    CollectedActions,
    mainCardsReducer,
    FormCardActions,
    MainCardActions,
    MainPageInfoActions,
    mainPageInfoReducer,
    FilterCardActions,
    filterCardsReducer,
} from '../../utils/reducers/appReducer'
import { FilterValues, ICardGen, MainPageInfo } from '../../utils/types'
import { ICharacter } from '../../api/rickandmortyapi'

type InitialStateType = {
    formCards: ICardGen[]
    mainCards: ICharacter[]
    filterCards: FilterValues
    mainPageInfo: MainPageInfo
}

const initialState = {
    formCards: [],
    mainCards: [],
    filterCards: { gender: '', species: '', status: '' },
    mainPageInfo: { current: 1, total: 20, newPages: 1, count: 0 },
}

const AppContext = createContext<{
    state: InitialStateType
    dispatch: Dispatch<CollectedActions>
}>({
    state: initialState,
    dispatch: () => null,
})

const mainReducer = (
    { formCards, mainCards, filterCards, mainPageInfo }: InitialStateType,
    action: CollectedActions
) => ({
    formCards: formCardsReducer(formCards, action as FormCardActions),
    mainCards: mainCardsReducer(mainCards, action as MainCardActions),
    filterCards: filterCardsReducer(filterCards, action as FilterCardActions),
    mainPageInfo: mainPageInfoReducer(
        mainPageInfo,
        action as MainPageInfoActions
    ),
})

type AppProvider = {
    children: React.ReactElement
}

const AppProvider = (props: AppProvider) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }
