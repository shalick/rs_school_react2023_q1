import React from 'react'
import { Component } from 'react'
import { EmptyProps } from '../../utils/types'
import classes from './Search.module.css'

export class Search extends Component {
    readonly state: { searchWord: string }
    constructor(props: EmptyProps) {
        super(props)
        this.state = { searchWord: localStorage.getItem('searchString') || '' }
    }

    componentWillUnmount = () => {
        localStorage.setItem('searchString', this.state.searchWord)
    }

    handleChangeInput = ({
        target: { value },
    }: {
        target: { value: string }
    }) => {
        this.setState((prev) => ({ ...prev, searchWord: value }))
        console.log(this.state.searchWord)
    }

    render = () => (
        <div className={classes.searchBox}>
            <input
                type="search"
                id="search"
                className={classes.search}
                placeholder="Search movie"
                autoFocus
                value={this.state.searchWord || ''}
                onChange={this.handleChangeInput}
            />
            <label htmlFor="search" className={classes.searchLabel}>
                Search
            </label>
        </div>
    )
}
