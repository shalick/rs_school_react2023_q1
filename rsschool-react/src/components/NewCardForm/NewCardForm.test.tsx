/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import NewCardForm from './NewCardForm'
import './mockForm'
import { vi } from 'vitest'

const setter = vi.fn()
describe('Form component works', () => {
    it('render form', () => {
        render(<NewCardForm setFormState={setter} />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toHaveValue('')

        expect(screen.getByLabelText(/release date/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/release date/i)).toHaveValue('')

        expect(screen.getByRole('combobox')).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toHaveValue('')
        expect(screen.getAllByRole('option')).toHaveLength(8)

        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByRole('checkbox')).not.toBeChecked()

        expect(screen.getAllByRole('radio')).toHaveLength(2)
        screen
            .getAllByRole('radio')
            .forEach((el) => expect(el).not.toBeChecked())

        const upload = screen.getByLabelText<HTMLInputElement>(/upload poster/i)
        expect(upload).toBeInTheDocument()
        expect(upload.files).toHaveLength(0)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    it('submit button should be disabled', () => {
        render(<NewCardForm setFormState={setter} />)
        expect(screen.getByRole('button')).toBeDisabled()
    })

    it('submit button not to be disabled after 1st input', () => {
        render(<NewCardForm setFormState={setter} />)
        const input = screen.getByRole('textbox')
        const title = 'test title'
        fireEvent.change(input, { target: { value: title } })
        expect(screen.getByRole('button')).not.toBeDisabled()
    })

    it('submit button should be disabled with unfulfilled form', async () => {
        render(<NewCardForm setFormState={setter} />)
        const input = screen.getByRole('textbox')
        const title = 'test title'
        fireEvent.change(input, { target: { value: title } })
        fireEvent.click(screen.getByRole('button'))
        expect(await screen.findByRole('button')).toBeDisabled()
    })

    it('should render errors of incorrect fields', async () => {
        render(<NewCardForm setFormState={setter} />)
        const input = screen.getByRole('textbox')
        const title = 'test title'
        fireEvent.change(input, { target: { value: title } })
        fireEvent.click(screen.getByLabelText('Yes'))
        fireEvent.click(screen.getByRole('button'))
        expect(screen.queryByText(/Incorrect title/i)).not.toBeInTheDocument()
        expect(
            screen.queryByText(/Please indicate streaming/i)
        ).not.toBeInTheDocument()
        expect(await screen.findByText(/Incorrect date/i)).toBeInTheDocument()
        expect(
            screen.getByText(/You should choose category/i)
        ).toBeInTheDocument()
        expect(
            screen.getByText(/Check if you watched this movie/i)
        ).toBeInTheDocument()
        expect(
            screen.getByText(/Download file with 2 MB size limit/i)
        ).toBeInTheDocument()
    })

    it('form submit correctly', async () => {
        render(<NewCardForm setFormState={setter} />)
        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'test title' },
        })
        fireEvent.change(screen.getByLabelText(/release date/i), {
            target: { value: '2002-12-17' },
        })
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: 'Action' },
        })
        fireEvent.click(screen.getByRole('checkbox'))
        fireEvent.click(screen.getByLabelText('Yes'))
        const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })
        const posterInput = screen.getByLabelText(/upload poster/i)
        await waitFor(() =>
            fireEvent.change(posterInput, {
                target: { files: [file] },
            })
        )
        // fireEvent.upload(
        //     screen.getByLabelText(/upload image/i),
        //     new File(['hello'], 'hello.png', { type: 'image/png' })
        // )
        fireEvent.click(screen.getByRole('button'))
        expect(screen.queryByText(/Incorrect name/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/Incorrect date/i)).not.toBeInTheDocument()
        expect(
            screen.queryByText(/Country should be chosen/i)
        ).not.toBeInTheDocument()
        expect(
            screen.queryByText(/Check if you watched this movie/i)
        ).not.toBeInTheDocument()
        expect(
            screen.queryByText(/Please indicate streaming/i)
        ).not.toBeInTheDocument()
        expect(
            screen.queryByText(/Download file with 2 MB size limit/i)
        ).not.toBeInTheDocument()

        setTimeout(() => {
            expect(screen.findByRole('textbox')).toHaveValue('')
            expect(screen.getByLabelText(/release date/i)).toHaveValue('')
            expect(screen.getByRole('combobox')).toHaveValue('')
            expect(screen.getByRole('checkbox')).not.toBeChecked()
            screen
                .getAllByRole('radio')
                .forEach((el) => expect(el).not.toBeChecked())

            expect(
                screen.queryByText(/Card successfully saved/i)
            ).toBeInTheDocument()
            expect(screen.getByRole('button')).toBeDisabled()
        }, 1000)
    })
})
