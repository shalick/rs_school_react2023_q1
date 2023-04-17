import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import classes from './CardsList.module.css'
import {
    IFilteredCharacter,
    createRequest,
    getFilterUrl,
} from '../../api/rickandmortyapi'
import ModalMovieCard from '../ModalMovieCard/ModalMovieCard'
import Preloader from '../Preloader/Preloader'
import { AppContext } from '../context/AppContext'
import { Actions } from '../../utils/reducers/appReducer'
import { countPageAmount, sliceCards } from '../../utils/pagination'

interface Props {
    searchWord: string
}

export const CardsList = ({ searchWord }: Props) => {
    const { state, dispatch } = useContext(AppContext)
    const isFirstInit = useRef(true)
    const [isPending, setIsPending] = useState(false)
    const [message, setMessage] = useState('')
    const isMount = useRef(false)

    const totalPages = useRef(state.mainPageInfo.total)
    const isCards = useRef(() => state.mainCards.length !== 0)

    const onRequestEnd = () => {
        if (isMount.current) setIsPending(false)
    }
    const onError = useCallback(
        (error: string) => {
            if (isMount.current) {
                setMessage(error)
                dispatch({ type: Actions.SET_MAIN_CARD, payload: [] })
                dispatch({
                    type: Actions.SET_MAIN_PAGE_INFO,
                    payload: {
                        newPages: 1,
                        count: 1,
                    },
                })
            }
        },
        [dispatch]
    )

    const onRequestData = useCallback(
        (data: IFilteredCharacter) => {
            if (isMount.current) {
                dispatch({ type: Actions.SET_MAIN_CARD, payload: data.results })
                dispatch({
                    type: Actions.SET_MAIN_PAGE_INFO,
                    payload: {
                        newPages: countPageAmount(
                            totalPages.current,
                            data.info.count
                        ),
                        count: data.info.count,
                    },
                })
            }
        },
        [dispatch]
    )

    const updateList = useCallback(() => {
        setIsPending(true)
        isMount.current = true

        const query = getFilterUrl({
            searchWord,
            gender: state.filterCards.gender,
            status: state.filterCards.status,
            species: state.filterCards.species,
        })

        createRequest({ query, onRequestData, onError, onRequestEnd })
    }, [onError, onRequestData, searchWord, state.filterCards])

    useEffect(() => {
        if (!(isFirstInit.current && isCards.current())) updateList()

        return () => {
            isMount.current = false
            isFirstInit.current = false
        }
    }, [updateList])

    return (
        <>
            {isPending && <Preloader />}
            {!state.mainCards.length && !isPending && (
                <h3 data-testid="not-found">{message}</h3>
            )}
            <ul className={classes.moviesContainer}>
                {!isPending &&
                    !!state.mainCards.length &&
                    sliceCards(
                        state.mainCards,
                        state.mainPageInfo.current,
                        state.mainPageInfo.total
                    ).map((item) => (
                        <MovieCard key={item.id + item.name} data={item} />
                    ))}
            </ul>
        </>
    )
}
