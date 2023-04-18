import { combineReducers, configureStore } from '@reduxjs/toolkit'
import formCardsReducer from './reducers/FormCardsSlice'
import mainCardsReducer from './reducers/MainCardsSlice'
import filterMainCardsReducer from './reducers/FilterMainCardsSlice'

const rootReducer = combineReducers({
    formCardsReducer,
    mainCardsReducer,
    filterMainCardsReducer,
})

export const setupStore = () => {
    return configureStore({ reducer: rootReducer })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
