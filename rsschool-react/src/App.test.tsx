import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
    it('app renders', async () => {
        render(<App />)
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
        // expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByRole('page-title')).toBeInTheDocument()
        // expect(screen.getByText(/main/i)).toBeInTheDocument()
        expect(screen.getByText(/form/i)).toBeInTheDocument()
        expect(screen.getByText(/about/i)).toBeInTheDocument()
    })
})
