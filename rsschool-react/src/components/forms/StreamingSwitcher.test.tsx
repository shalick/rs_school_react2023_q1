import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import StreamingSwitcher from './StreamingSwitcher'
import { vi } from 'vitest'

const message = 'error_message'
const func = vi.fn()
const data = {
    name: 'streaming',
    options: ['Yes', 'No'],
    register: {
        validate: func,
    },
}

describe('StreamingSwitcher component', () => {
    it('render switcher without error', () => {
        render(
            <StreamingSwitcher data={data} register={func} clearErrors={func} />
        )
        expect(screen.getAllByRole('radio')).toHaveLength(2)
        screen
            .getAllByRole('radio')
            .forEach((el) => expect(el).not.toBeChecked())
    })

    it('render switcher with error', () => {
        render(
            <StreamingSwitcher
                data={data}
                error={message}
                register={func}
                clearErrors={func}
            />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    it('switcher works', () => {
        render(
            <StreamingSwitcher data={data} register={func} clearErrors={func} />
        )
        const [toggle1, toggle2] = screen.getAllByRole('radio')
        fireEvent.click(toggle1)
        expect(toggle1).toBeChecked()
        expect(toggle2).not.toBeChecked()
        fireEvent.click(toggle2)
        expect(toggle2).toBeChecked()
    })
})
