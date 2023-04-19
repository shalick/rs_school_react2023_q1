import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { filterMainCardsSlice } from '../../store/reducers/FilterMainCardsSlice'
import classes from './Search.module.css'

export const Search = () => {
    const { searchWord } = useAppSelector(
        (state) => state.filterMainCardsReducer
    )
    const { setSearchWord } = filterMainCardsSlice.actions
    const dispatch = useAppDispatch()

    const [currentWord, setCurrentWord] = useState(searchWord)

    useEffect(() => {
        dispatch(setSearchWord(currentWord))
    }, [currentWord, dispatch, setSearchWord])

    return (
        <div className={classes.searchBox}>
            <input
                type="search"
                id="search"
                className={classes.search}
                placeholder="Search movie"
                autoFocus
                value={currentWord || ''}
                onChange={({ target: { value } }) => setCurrentWord(value)}
            />
            <label htmlFor="search" className={classes.searchLabel}>
                Search
            </label>
        </div>
    )
}
