/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    // it('should switch checked status', () => {
    //     setup()
    //     expect(checkbox.checked).toEqual(false)
    //     userEvent.click(checkbox)
    //     expect(checkbox.checked).toEqual(true)
    // })
})
