import { render, screen } from '@testing-library/react'
import FormPage from './Form'
import { Provider } from 'react-redux'
import { setupStore } from '../../store/store'

const store = setupStore()

describe('Form page', () => {
    let form: HTMLElement

    const setup = () => {
        render(
            <Provider store={store}>
                <FormPage />
            </Provider>
        )
        form = screen.getByTestId('form-page')
    }

    it('should render page', () => {
        setup()
        expect(form).toBeInTheDocument()
    })
})
