import React, { KeyboardEvent } from 'react'
import { useState, useEffect, useCallback } from 'react'
import classes from './Search.module.css'

interface Props {
    searchMovie: string
    setSearchWord: (value: string) => void
}

export const Search = ({ searchMovie, setSearchWord }: Props) => {
    const [currentInput, setCurrentInput] = useState(searchMovie)

    useEffect(() => {
        window.localStorage.setItem('searchMovie', currentInput)
    }, [currentInput])

    const handleKeyUp = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') setSearchWord(currentInput)
        },
        [setSearchWord, currentInput]
    )

    return (
        <div className={classes.searchBox}>
            <input
                type="search"
                id="search"
                className={classes.search}
                placeholder="Search movie"
                autoFocus
                value={currentInput || ''}
                onChange={({ target: { value } }) => setCurrentInput(value)}
                onKeyUp={handleKeyUp}
            />
            <label htmlFor="search" className={classes.searchLabel}>
                Search
            </label>
        </div>
    )
}
