/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import FormPage from './Form'

describe('Form page', () => {
    let form: HTMLElement

    const setup = () => {
        render(<FormPage />)
        form = screen.getByTestId('form-page')
    }

    it('should render page', () => {
        setup()
        expect(form).toBeInTheDocument()
    })
})
