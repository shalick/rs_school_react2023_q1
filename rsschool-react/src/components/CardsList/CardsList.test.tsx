import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardsList } from './CardsList'
import axiosMock from '../../utils/axios_mock'
import { Provider } from 'react-redux'
import { setupStore } from '../../store/store'

const emptyResults = {
    searchWord: '',
    data: {
        data: {
            results: [
                { name: 'Rick Sanchez' },
                { name: 'Morty Smith' },
                { name: 'Summer Smith' },
                { name: 'Beth Smith' },
                { name: 'Jerry Smith' },
                { name: 'Abadango Cluster Princess' },
                { name: 'Abradolf Lincler' },
                { name: 'Adjudicator Rick' },
                { name: 'Agency Director' },
                { name: 'Alan Rails' },
                { name: 'Albert Einstein' },
                { name: 'Alexander' },
                { name: 'Alien Googah' },
                { name: 'Alien Morty' },
                { name: 'Alien Rick' },
                { name: 'Amish Cyborg' },
                { name: 'Annie' },
                { name: 'Antenna Morty' },
                { name: 'Antenna Rick' },
                { name: 'Ants in my Eyes Johnson' },
            ],
        },
    },
}

// const mortyResults = {
//     searchWord: 'morty',
//     data: {
//         data: {
//             results: [
//                 { name: 'Morty Smith' },
//                 { name: 'Alien Morty' },
//                 { name: 'Antenna Morty' },
//                 { name: 'Aqua Morty' },
//                 { name: 'Artist Morty' },
//                 { name: 'Big Head Morty' },
//                 { name: 'Big Morty' },
//                 { name: 'Body Guard Morty' },
//                 { name: 'Blue Shirt Morty' },
//                 { name: 'Campaign Manager Morty' },
//                 { name: 'Cop Morty' },
//                 { name: 'Cowboy Morty' },
//                 { name: 'Cronenberg Morty' },
//                 { name: 'Cult Leader Morty' },
//                 { name: 'Cyclops Morty' },
//                 { name: 'Dipper and Mabel Mortys' },
//                 { name: 'Eric Stoltz Mask Morty' },
//                 { name: 'Evil Morty' },
//                 { name: 'Fat Morty' },
//                 { name: 'Glasses Morty' },
//             ],
//         },
//     },
// }

const incorrectResults = {
    searchWord: 'some wrong value 123',
    data: {
        error: 'There is nothing here',
    },
}

const mockCall = (
    data: typeof emptyResults.data | typeof incorrectResults.data
) =>
    axiosMock.request.mockResolvedValueOnce({
        ...data,
    })

afterEach(() => axiosMock.request.mockClear())

const store = setupStore()

describe('Card list', () => {
    it('show loader while fetching data', async () => {
        mockCall(emptyResults.data)
        render(
            <Provider store={store}>
                <CardsList />
            </Provider>
        )
        expect(screen.getByTestId(/loader/i)).toBeInTheDocument()
    })
})

// const modalResult = {
//     searchWord: 'morty',
//     data: {
//         data: {
//             results: [
//                 {
//                     id: 2,
//                     name: 'Morty Smith',
//                     status: 'Alive',
//                     species: 'Human',
//                     type: '',
//                     gender: 'Male',
//                     origin: {
//                         name: 'unknown',
//                         url: '',
//                     },
//                     location: {
//                         name: 'Citadel of Ricks',
//                     },
//                     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//                     created: '2017-11-04T18:50:21.651Z',
//                 },
//             ],
//         },
//     },
// }

// describe('Modal works', () => {
//     it('modal is displayed with card values', async () => {
//         mockCall(modalResult.data)
//         render(<CardsList searchWord={modalResult.searchWord} />)

//         const cards = await screen.findAllByTestId(/card/i)
//         const modal = screen.getByTestId(/modal-window/i)

//         expect(modal).toHaveClass('hide')
//         fireEvent.click(cards[0])
//         expect(modal).not.toHaveClass('hide')

//         const {
//             name,
//             status,
//             species,
//             gender,
//             created,
//             image,
//             origin,
//             location,
//         } = modalResult.data.data.results[0]

//         expect(screen.getAllByText(name)).toHaveLength(2)
//         expect(screen.getByText(status)).toBeInTheDocument()
//         expect(screen.getByText(species)).toBeInTheDocument()
//         expect(screen.getByText(gender)).toBeInTheDocument()
//         expect(screen.getByText(created.slice(0, 10))).toBeInTheDocument()
//         expect(screen.getByText(origin.name)).toBeInTheDocument()
//         expect(screen.getByText(location.name)).toBeInTheDocument()
//         expect(
//             screen.getByTestId<HTMLImageElement>(/modal-image/i).src
//         ).toEqual(image)
//     })

//     it('modal is closing on overlay click', async () => {
//         mockCall(modalResult.data)
//         render(<CardsList searchWord={modalResult.searchWord} />)

//         const cards = await screen.findAllByTestId(/card/i)
//         const modal = screen.getByTestId(/modal-window/i)

//         expect(modal).toHaveClass('hide')
//         fireEvent.click(cards[0])
//         expect(modal).not.toHaveClass('hide')

//         fireEvent.click(modal)
//         expect(modal).toHaveClass('hide')
//     })

//     it('modal is not closing on content click', async () => {
//         mockCall(modalResult.data)
//         render(<CardsList searchWord={modalResult.searchWord} />)

//         const cards = await screen.findAllByTestId(/card/i)
//         const modal = screen.getByTestId(/modal-window/i)
//         const modalContainer = screen.getByTestId(/modal-container/i)

//         expect(modal).toHaveClass('hide')
//         fireEvent.click(cards[0])
//         expect(modal).not.toHaveClass('hide')

//         fireEvent.click(modalContainer)
//         expect(modal).not.toHaveClass('hide')
//     })

//     it('modal is closing on close button click', async () => {
//         mockCall(modalResult.data)
//         render(<CardsList searchWord={modalResult.searchWord} />)

//         const cards = await screen.findAllByTestId(/card/i)
//         const modal = screen.getByTestId(/modal-window/i)
//         const modalClose = screen.getByTestId(/modal-close/i)

//         expect(modal).toHaveClass('hide')
//         fireEvent.click(cards[0])
//         expect(modal).not.toHaveClass('hide')

//         fireEvent.click(modalClose)
//         expect(modal).toHaveClass('hide')
//     })
// })
