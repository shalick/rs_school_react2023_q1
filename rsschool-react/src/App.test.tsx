import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const store = setupStore()

describe('App', () => {
    it('app renders', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(screen.getByRole('searchbox')).toBeInTheDocument()
        // expect(screen.getByRole('list')).toBeInTheDocument()
        // expect(screen.getByRole('page-title')).toBeInTheDocument()
        // expect(screen.getByText(/main/i)).toBeInTheDocument()
        expect(screen.getByText(/form/i)).toBeInTheDocument()
        expect(screen.getByText(/about/i)).toBeInTheDocument()
    })
    // it('should change pages', async () => {
    //     await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    //     const mainLink = screen.getByTestId('main-link')
    //     const aboutLink = screen.getByTestId('about-link')
    //     fireEvent.click(aboutLink)
    //     expect(screen.getByTestId('about-page')).toBeInTheDocument()
    //     fireEvent.click(mainLink)
    //     expect(screen.getByTestId('main-page')).toBeInTheDocument()
    // })
})
