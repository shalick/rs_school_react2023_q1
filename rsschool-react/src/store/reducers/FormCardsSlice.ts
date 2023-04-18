import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICardGen } from '../../utils/types'

export interface IFormData {
    title: string
    date: string
    category: string
    streaming: string
    watched: boolean
    poster: string | null
}

interface FormState {
    title: string
    date: string
    category: string
    streaming: string
    poster: string
    formStatesArr: ICardGen[]
}

const initialState: FormState = {
    title: '',
    date: '',
    category: 'default',
    streaming: '',
    poster: '',
    formStatesArr: [],
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
        },
        setDelivery: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setTime: (state, action: PayloadAction<string>) => {
            state.streaming = action.payload
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.poster = action.payload
        },
        setFormStatesArr: (state, action: PayloadAction<ICardGen[]>) => {
            state.formStatesArr = action.payload
        },
    },
})

export const {
    setName,
    setDate,
    setDelivery,
    setTime,
    setImage,
    setFormStatesArr,
} = formSlice.actions

export default formSlice.reducer
