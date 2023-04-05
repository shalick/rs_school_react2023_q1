import React from 'react'
import { render, screen } from '@testing-library/react'
import { Search } from './Search'

describe('Search component', () => {
    it('render empty search input', () => {
        render(<Search />)
        const input = screen.getByRole('searchbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
    })

    it('search string restore from local storage', () => {
        const testValue = 'new test'
        localStorage.setItem('inputValue', testValue)
        render(<Search />)
        expect(screen.getByRole('searchbox')).toHaveValue(testValue)
    })
})
