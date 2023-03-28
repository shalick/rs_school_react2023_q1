/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import MovieTitleText from './MovieTitleText'

describe('Movie title input', () => {
    let input: HTMLInputElement

    const setup = () => {
        const ref = { current: {} } as React.RefObject<HTMLInputElement>
        render(<MovieTitleText forwardRef={ref} />)
        input = screen.getByRole('textbox', { name: /Movie Title/i })
    }

    it('should render component', () => {
        setup()
        expect(input).toBeInTheDocument()
    })

    it('should input focus', () => {
        setup()
        expect(input).not.toHaveFocus()
        input.focus()
        expect(input).toHaveFocus()
    })
})
