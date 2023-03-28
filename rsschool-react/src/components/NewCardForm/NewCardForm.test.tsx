/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import NewCardForm from './NewCardForm'

describe('Form component works', () => {
    it('render form', () => {
        render(<NewCardForm handleFormState={() => []} onClose={() => false} />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toHaveValue('')

        expect(screen.getByLabelText(/Release date/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Release date/i)).toHaveValue('')

        expect(screen.getByRole('combobox')).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toHaveValue('')
        expect(screen.getAllByRole('option')).toHaveLength(8)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByRole('checkbox')).not.toBeChecked()

        expect(screen.getAllByRole('radio')).toHaveLength(2)
        screen
            .getAllByRole('radio')
            .forEach((el) => expect(el).not.toBeChecked())

        const upload = screen.getByLabelText<HTMLInputElement>(/Upload poster/i)
        expect(upload).toBeInTheDocument()
        expect(upload.files).toHaveLength(0)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})
