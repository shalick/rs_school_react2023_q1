/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react'
import MovieTitleText from './MovieTitleText'
import { vi } from 'vitest'

const message = 'error_message'
const func = vi.fn()
const data = {
    name: 'title',
    label: 'Movie title',
    register: {
        validate: func,
    },
}

describe('MovieTitleText component', () => {
    it('render textfield without error', () => {
        render(
            <MovieTitleText data={data} register={func} clearErrors={func} />
        )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toHaveValue('')
    })

    it('render textfield with error', () => {
        render(
            <MovieTitleText
                data={data}
                error={message}
                register={func}
                clearErrors={func}
            />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    it('textfield works', () => {
        render(
            <MovieTitleText data={data} register={func} clearErrors={func} />
        )
        const input = screen.getByRole('textbox')
        const text = 'test text'
        fireEvent.change(input, { target: { value: text } })
        expect(input).toHaveValue(text)
        expect(input).toHaveDisplayValue(text)
    })
})
