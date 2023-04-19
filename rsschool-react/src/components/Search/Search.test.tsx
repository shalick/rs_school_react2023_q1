import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'
import { Provider } from 'react-redux'
import { setupStore } from '../../store/store'

const store = setupStore()

describe('Search component', () => {
    const searchWord = 'test 123'
    it('render empty search component', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        )
        const input = screen.getByRole('searchbox')
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
    })

    it('search input changes', () => {
        render(
            <Provider store={store}>
                <Search />
            </Provider>
        )
        const input = screen.getByRole('searchbox')
        fireEvent.change(input, { target: { value: searchWord } })
        expect(input).toHaveValue(searchWord)
    })
})
