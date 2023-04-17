import React, { createContext, Dispatch, FC, useReducer } from 'react'
import {
    formCardsReducer,
    CollectedActions,
    mainCardsReducer,
    FormCardActions,
    MainCardActions,
} from '../../utils/reducers/appReducer'
import { ICardGen } from '../../utils/types'
import { ICharacter } from '../../api/rickandmortyapi'

type InitialStateType = {
    formCards: ICardGen[]
    mainCards: ICharacter[]
}

const initialState = {
    formCards: [],
    mainCards: [],
}

const AppContext = createContext<{
    state: InitialStateType
    dispatch: Dispatch<CollectedActions>
}>({
    state: initialState,
    dispatch: () => null,
})

const mainReducer = (
    { formCards, mainCards }: InitialStateType,
    action: CollectedActions
) => ({
    formCards: formCardsReducer(formCards, action as FormCardActions),
    mainCards: mainCardsReducer(mainCards, action as MainCardActions),
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
