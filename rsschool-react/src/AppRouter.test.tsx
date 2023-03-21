import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import NotFound from '../src/components/pages/NotFound'
import App from './App'

describe('Routing', () => {
    it('full app rendering/navigating', () => {
        render(<App />)
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
        userEvent.click(screen.getByText(/about/i))
        expect(screen.getByText(/About/i)).toBeInTheDocument()
        userEvent.click(screen.getByText(/main/i))
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
    })

    it('landing on a bad page', () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MemoryRouter>
        )
        expect(screen.getByText(/404 Error/i)).toBeInTheDocument()
    })
})
