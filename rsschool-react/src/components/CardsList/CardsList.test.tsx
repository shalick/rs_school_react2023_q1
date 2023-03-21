import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardsList } from './CardsList'
import { movies } from '../../utils/movies'

describe('List component', () => {
    it('List render', () => {
        render(<CardsList movies={movies} />)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
})
