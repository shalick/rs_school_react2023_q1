/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import ReleaseDate from './ReleaseDate'

describe('Release date input', () => {
    let input: HTMLInputElement

    const setup = () => {
        const ref = { current: {} } as React.RefObject<HTMLInputElement>
        render(<ReleaseDate forwardRef={ref} />)
        input = screen.getByTestId('date-input')
    }

    it('should render component', () => {
        setup()
        expect(input).toBeInTheDocument()
    })
})
