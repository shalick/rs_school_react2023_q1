import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'
import { vi } from 'vitest'

describe('Search component', () => {
    const searchWord = 'test 123'
    const setter = vi.fn()
    it('render empty search component', () => {
        render(<Search searchMovie={''} setSearchWord={setter} />)
        const input = screen.getByRole('searchbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
    })

    it('search input changes', () => {
        render(<Search searchMovie={''} setSearchWord={setter} />)
        const input = screen.getByRole('searchbox')
        fireEvent.change(input, { target: { value: searchWord } })
        expect(input).toHaveValue(searchWord)
    })

    it('search word save after unmount in local storage', () => {
        const { unmount } = render(
            <Search searchMovie={searchWord} setSearchWord={setter} />
        )
        unmount()
        expect(localStorage.getItem('searchMovie')).toEqual(searchWord)
    })
})
