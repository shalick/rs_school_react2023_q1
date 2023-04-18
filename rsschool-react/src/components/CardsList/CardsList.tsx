import { useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import classes from './CardsList.module.css'
import { getFilterUrl } from '../../api/rickandmortyapi'
import Preloader from '../Preloader/Preloader'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchCharacters } from '../../store/thunks/ActionCreators'

export const CardsList = () => {
    const { cards, isLoading, error } = useAppSelector(
        (state) => state.mainCardsReducer
    )
    const { searchWord, filters } = useAppSelector(
        (state) => state.filterMainCardsReducer
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCharacters(getFilterUrl({ searchWord, ...filters })))
    }, [dispatch, filters, searchWord])

    return (
        <>
            {isLoading && <Preloader />}
            {error && <h3 data-testid="not-found">{error}</h3>}
            <ul className={classes.moviesContainer}>
                {!isLoading &&
                    cards.map((item) => (
                        <MovieCard key={item.id + item.name} data={item} />
                    ))}
            </ul>
        </>
    )
}
