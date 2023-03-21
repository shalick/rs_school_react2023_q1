import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

// describe('App', () => {
//     it('Renders hello world', () => {
//         // eslint-disable-next-line react/react-in-jsx-scope
//         render(<App />)
//         expect(
//             screen.getByRole('heading', {
//                 level: 1,
//             })
//         ).toHaveTextContent('Hello World')
//     })
// })

describe('App', () => {
    it('app renders', () => {
        render(<App />)
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText(/main/i)).toBeInTheDocument()
        expect(screen.getByText(/about/i)).toBeInTheDocument()
    })
})
