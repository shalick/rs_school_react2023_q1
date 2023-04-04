/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react'
import CategorySelect from './CategorySelect'
import { vi } from 'vitest'

const message = 'error_message'
const func = vi.fn()
const data = {
    name: 'category',
    label: 'Category',
    options: [
        '',
        'Action',
        'Drama',
        'Romance',
        'Animation',
        'Comedy',
        'Crime',
        'Thriller',
    ],
    register: {
        validate: func,
    },
}

describe('CategorySelect component', () => {
    it('render select without error', () => {
        render(
            <CategorySelect data={data} register={func} clearErrors={func} />
        )
        expect(screen.getByRole('combobox')).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toHaveValue('')
        const options = screen.getAllByRole('option')
        expect(options).toHaveLength(8)
        expect(options[0]).toBeDisabled()
    })

    it('render select with error', () => {
        render(
            <CategorySelect
                data={data}
                error={message}
                register={func}
                clearErrors={func}
            />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    it('select works', () => {
        render(
            <CategorySelect data={data} register={func} clearErrors={func} />
        )
        const select = screen.getByRole('combobox', { name: 'Category' })
        const options = screen.getAllByRole('option')
        expect(select).toHaveValue('')
        fireEvent.change(select, { target: { value: 'Action' } })
        expect(select).toHaveValue(data.options[1])
        expect(select).toHaveTextContent(data.options[1])
        fireEvent.change(select, { target: { value: 'Drama' } })
        expect(select).toHaveValue(data.options[2])
        expect(select).toHaveTextContent(data.options[2])
    })
})
