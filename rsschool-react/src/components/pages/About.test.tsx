import { render, screen } from '@testing-library/react'
import About from './About'

describe('About page', () => {
    it('renders about page', () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        render(<About />)
        // expect(screen.getByText(/About/i)).toBeInTheDocument()
        expect(
            screen.getByText(/This is application about movies/i)
        ).toBeInTheDocument()
    })
})
