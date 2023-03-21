import React from 'react'
import { Component } from 'react'
import { EmptyProps } from '../../utils/types'
import classes from './Search.module.css'

export class Search extends Component {
    readonly state: { searchStr: string }
    constructor(props: EmptyProps) {
        super(props)
        this.state = { searchStr: localStorage.getItem('searchString') || '' }
    }

    componentWillUnmount = () => {
        localStorage.setItem('searchStr', this.state.searchStr)
    }

    handleChangeInput = ({
        target: { value },
    }: {
        target: { value: string }
    }) => {
        this.setState((prev) => ({ ...prev, searchStr: value }))
        console.log(this.state.searchStr)
    }

    render = () => (
        <div className={classes.searchBox}>
            <input
                type="search"
                id="search"
                className={classes.search}
                placeholder="Search movie"
                // autoFocus
                value={this.state.searchStr || ''}
                onChange={this.handleChangeInput}
            />
            <label htmlFor="search" className={classes.searchLabel}>
                Search
            </label>
        </div>
    )
}
