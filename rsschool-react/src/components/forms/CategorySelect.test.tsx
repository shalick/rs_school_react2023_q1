/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CategorySelect from './CategorySelect'

describe('Delivery select', () => {
    let select: HTMLSelectElement

    const setup = () => {
        const ref = { current: {} } as React.RefObject<HTMLSelectElement>
        render(<CategorySelect forwardRef={ref} />)
        select = screen.getByRole('combobox')
    }

    it('should render component', () => {
        setup()
        expect(select).toBeInTheDocument()
    })

    // it('should select option', () => {
    //     setup()
    //     expect(select.value).toBe('')
    //     userEvent.selectOptions(
    //         select,
    //         screen.getByRole('option', { name: /Action/i })
    //     )
    //     expect(select.value).toBe('Action')
    // })
})
