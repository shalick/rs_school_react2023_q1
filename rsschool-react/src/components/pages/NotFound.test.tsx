import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'
import { BrowserRouter } from 'react-router-dom'

describe('Not found page', () => {
    it('renders 404 page', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        expect(screen.getByText(/404 Error/i)).toBeInTheDocument()
    })
})
