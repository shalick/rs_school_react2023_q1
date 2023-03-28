/* eslint-disable react/react-in-jsx-scope */
import { render, screen, within } from '@testing-library/react'
import FormCardList from './FormCardList'
// import { mockValidForm } from '../../tests/mockForm'
import { IFormData } from '../../utils/types'

export const mockValidForm = () => {
    return {
        title: 'Top Gun',
        date: '2022-08-08',
        category: 'Action',
        streaming: 'yes',
        poster: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
        watched: true,
    }
}

describe('Form card list', () => {
    const singleRequest = mockValidForm() as IFormData
    const multipleRequest = new Array(3).fill(singleRequest) as IFormData[]
    let list: HTMLElement
    let statesArr: IFormData[] = [singleRequest]

    const setup = () => {
        render(<FormCardList statesArr={statesArr} />)
        list = screen.getByTestId('form-card-list')
    }

    it('should render component', () => {
        setup()
        expect(list).toBeInTheDocument()
    })

    it('should render correct number of items', () => {
        statesArr = multipleRequest
        setup()
        const { getAllByRole } = within(list)
        const items = getAllByRole('listitem')
        expect(items.length).toBe(statesArr.length)
    })
})
