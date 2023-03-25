import React from 'react'
import { Component } from 'react'
import classes from './Search.module.css'

export class Search extends Component {
    state: { searchStr: string }
    constructor(props: Record<string, never>) {
        super(props)
        this.state = { searchStr: '' }
    }

    componentDidMount() {
        const value = localStorage.getItem('searchStr')
        if (value) {
            this.setState({ searchStr: value })
        }
        window.addEventListener('beforeunload', this.handleBeforeUnload)
    }

    componentWillUnmount = () => {
        window.removeEventListener('beforeunload', this.handleBeforeUnload)
        localStorage.setItem('searchStr', this.state.searchStr)
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchStr: event.target.value })
    }

    handleBeforeUnload = () => {
        localStorage.setItem('searchStr', this.state.searchStr)
    }

    render() {
        return (
            <div className={classes.searchBox}>
                <input
                    type="search"
                    id="search"
                    className={classes.search}
                    placeholder="Search movie"
                    autoFocus
                    value={this.state.searchStr || ''}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="search" className={classes.searchLabel}>
                    Search
                </label>
            </div>
        )
    }
}
