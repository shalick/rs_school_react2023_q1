import React, { useEffect, useState } from 'react'
import { IMovieCard } from '../../utils/types'
import MovieCard from '../MovieCard/MovieCard'
import classes from './CardsList.module.css'
import {
    ICharacter,
    IFilteredCharacter,
    createRequest,
} from '../../api/rickandmortyapi'
import ModalMovieCard from '../ModalMovieCard/ModalMovieCard'

interface IProps {
    movies: IMovieCard[]
}

interface Props {
    searchWord: string
}

interface Data extends Partial<IFilteredCharacter> {
    props?: ICharacter
}

export const CardsList = ({ searchWord }: Props) => {
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState<Data>({})
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState('')

    const hideModal = () => setModal(false)
    const showModal = (props: ICharacter) => {
        setData((prev) => ({ ...prev, props }))
        setModal(true)
    }

    useEffect(() => {
        setIsPending(true)

        const onRequestData = (data: IFilteredCharacter) => {
            setData((prev) => ({ ...prev, ...data }))
        }
        const onError = (error: string) => {
            setData((prev) => ({ ...prev, results: undefined }))
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

    return (
        <>
            <ModalMovieCard
                show={modal}
                data={data.props}
                handleClose={hideModal}
            />
            {!data.results && !isPending && (
                <h3 data-testid="not-found">{message}</h3>
            )}
            <ul className={classes.moviesContainer}>
                {!isPending &&
                    data.results?.map((item) => (
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
