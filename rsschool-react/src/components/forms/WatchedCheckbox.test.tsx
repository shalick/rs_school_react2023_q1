/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import WatchedCheckbox from './WatchedCheckbox'

describe('Watched checkbox', () => {
    let checkbox: HTMLInputElement
    const setup = () => {
        // const mock = jest.fn()
        const ref = { current: {} } as React.RefObject<HTMLInputElement>
        render(<WatchedCheckbox forwardRef={ref} />)
        checkbox = screen.getByRole('checkbox')
    }

    it('should render component', () => {
        setup()
        expect(checkbox).toBeInTheDocument()
    })
})
