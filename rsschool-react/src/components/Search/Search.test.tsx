import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from './Search'

describe('Search component', () => {
    const searchStr = 'test'
    it('render empty search component', () => {
        render(<Search />)
        const input = screen.getByRole('searchbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
    })

    it('search input changes', () => {
        render(<Search />)
        const input = screen.getByRole('searchbox')
        userEvent.type(input, searchStr)
        expect(input).toHaveValue(searchStr)
    })

    it('search string save after unmount in local storage', () => {
        const { unmount } = render(<Search />)
        unmount()
        expect(localStorage.getItem('searchStr')).toEqual(searchStr)
    })

    it('search string restore from local storage', () => {
        const testValue = 'new test'
        localStorage.setItem('searchStr', testValue)
        render(<Search />)
        expect(screen.getByRole('searchbox')).toHaveValue(testValue)
    })
})
