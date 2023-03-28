/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StreamingSwitcher from './StreamingSwitcher'

describe('Time checkbox', () => {
    let radio: HTMLInputElement[]
    const setup = () => {
        const ref = { current: {} } as React.RefObject<HTMLInputElement>
        render(<StreamingSwitcher forwardRef={ref} />)
        expect(screen.getAllByRole('radio')).toHaveLength(2)
        radio = screen.getAllByRole('radio')
        screen
            .getAllByRole('radio')
            .forEach((el) => expect(el).not.toBeChecked())
    }

    it('should render component', () => {
        setup()
        expect(radio[0]).toBeInTheDocument()
        expect(radio[1]).toBeInTheDocument()
    })

    // it('should switch checked status', () => {
    //     setup()
    //     expect(radio.checked).toEqual(false)
    //     userEvent.click(customCheckbox)
    //     expect(radio.checked).toEqual(true)
    // })
})
