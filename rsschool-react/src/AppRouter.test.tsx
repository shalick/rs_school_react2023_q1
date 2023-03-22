import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import NotFound from '../src/components/pages/NotFound'
import App from './App'

describe('Routing', () => {
    it('full app rendering/navigating', async () => {
        render(<App />)
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
        await userEvent.click(screen.getByText(/about/i))
        expect(screen.getByRole('page-title')).toHaveTextContent('About')
        await userEvent.click(screen.getByText(/Main/))
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
