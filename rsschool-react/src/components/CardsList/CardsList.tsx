import { useContext, useEffect, useRef, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import classes from './CardsList.module.css'
import {
    ICharacter,
    IFilteredCharacter,
    createRequest,
} from '../../api/rickandmortyapi'
import ModalMovieCard from '../ModalMovieCard/ModalMovieCard'
import Preloader from '../Preloader/Preloader'
import { AppContext } from '../context/AppContext'
import { Actions } from '../../utils/reducers/appReducer'

interface Props {
    searchWord: string
}

interface Data extends Pick<IFilteredCharacter, 'results'> {
    show: boolean
    props?: ICharacter
}

export const CardsList = ({ searchWord }: Props) => {
    const { state, dispatch } = useContext(AppContext)
    const isFirstInit = useRef(true)

    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState<Data>({
        show: false,
        results: [...state.mainCards],
    })
    const [message, setMessage] = useState('')
    const isMount = useRef(false)

    const hideModal = () => setData((prev: Data) => ({ ...prev, show: false }))
    const showModal = (props: ICharacter) =>
        setData((prev) => ({ ...prev, show: true, props }))

    useEffect(() => {
        if (isFirstInit.current && state.mainCards.length)
            return () => {
                isMount.current = false
                isFirstInit.current = false
            }
        setIsPending(true)

        const onRequestData = (data: IFilteredCharacter) => {
            setData((prev) => ({ ...prev, ...data }))
        }
        const onError = (error: string) => {
            setData((prev) => ({ ...prev, results: [] }))
            setMessage(error)
        }
        const onRequestEnd = () => {
            setIsPending(false)
        }

        createRequest({
            query: searchWord,
            onRequestData,
            onError,
            onRequestEnd,
        })
    }, [searchWord])
    useEffect(() => {
        return () => {
            dispatch({ type: Actions.SET_MAIN_CARD, payload: data.results })
        }
    }, [data.results, dispatch])

    return (
        <>
            <ModalMovieCard
                show={data.show}
                data={data.props}
                handleClose={hideModal}
            />
            {isPending && <Preloader />}
            {!data.results.length && !isPending && (
                <h3 data-testid="not-found">{message}</h3>
            )}
            <ul className={classes.moviesContainer}>
                {!isPending &&
                    data.results.map((item) => (
                        <MovieCard
                            key={item.id + item.name}
                            data={item}
                            handleModal={() => showModal(item)}
                        />
                    ))}
            </ul>
        </>
    )
}
