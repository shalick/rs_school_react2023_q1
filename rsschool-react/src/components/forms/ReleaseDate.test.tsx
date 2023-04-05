import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ReleaseDate from './ReleaseDate'
import { vi } from 'vitest'

const message = 'error_message'
const func = vi.fn()
const data = {
    name: 'date',
    label: 'Release date',
    register: {
        validate: func,
    },
}

describe('ReleaseDate input component', () => {
    it('render datepicker without error', () => {
        render(<ReleaseDate data={data} register={func} clearErrors={func} />)
        expect(screen.getByLabelText(data.label)).toBeInTheDocument()
        expect(screen.getByLabelText(data.label)).toHaveValue('')
    })

    it('render datepicker with error', () => {
        render(
            <ReleaseDate
                data={data}
                error={message}
                register={func}
                clearErrors={func}
            />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    it('datepicker works', () => {
        render(<ReleaseDate data={data} register={func} clearErrors={func} />)
        const input = screen.getByLabelText(data.label)
        const date = '2003-12-17'
        fireEvent.change(input, { target: { value: date } })
        expect(input).toHaveValue(date)
        expect(input).toHaveDisplayValue(date)
    })
})
