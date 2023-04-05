import React from 'react'
import { useRef, useState, useEffect } from 'react'
import classes from './Search.module.css'

export const Search = () => {
    const savedInputValue = useRef(localStorage.getItem('inputValue') || '')
    const [inputValue, setInputValue] = useState(savedInputValue.current)

    useEffect(() => {
        return () => {
            localStorage.setItem('inputValue', savedInputValue.current)
        }
    }, [])

    useEffect(() => {
        savedInputValue.current = inputValue
    }, [inputValue])

    return (
        <div className={classes.searchBox}>
            <input
                type="search"
                id="search"
                className={classes.search}
                placeholder="Search movie"
                autoFocus
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <label htmlFor="search" className={classes.searchLabel}>
                Search
            </label>
        </div>
    )
}
