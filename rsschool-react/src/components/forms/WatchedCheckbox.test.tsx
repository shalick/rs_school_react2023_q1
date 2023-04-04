/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react'
import WatchedCheckbox from './WatchedCheckbox'
import { vi } from 'vitest'

const message = 'error_message'
const func = vi.fn()
const data = {
    name: 'watched',
    options: ['true', 'false'],
    register: {
        validate: func,
    },
}

describe('Checkbox component', () => {
    it('render checkbox without error', () => {
        render(
            <WatchedCheckbox data={data} register={func} clearErrors={func} />
        )
        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByRole('checkbox')).not.toBeChecked()
    })

    it('render checkbox with error', () => {
        render(
            <WatchedCheckbox
                data={data}
                error={message}
                register={func}
                clearErrors={func}
            />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    it('checkbox works', async () => {
        render(
            <WatchedCheckbox data={data} register={func} clearErrors={func} />
        )
        const inputCheckbox = screen.getByRole('checkbox')
        fireEvent.click(inputCheckbox)
        expect(inputCheckbox).toBeChecked()
        fireEvent.click(inputCheckbox)
        expect(screen.getByRole('checkbox')).not.toBeChecked()
    })
})
