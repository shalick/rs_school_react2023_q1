/* eslint-disable react/react-in-jsx-scope */
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PosterUpload from './PosterUpload'

describe('Poster uploader component', () => {
    let input: HTMLInputElement

    const setup = () => {
        const ref = { current: {} } as React.RefObject<HTMLInputElement>
        render(<PosterUpload forwardRef={ref} />)
        input = screen.getByTestId('file-input')
    }

    it('should render component', () => {
        setup()
        expect(input).toBeInTheDocument()
    })

    it('should input focus', () => {
        setup()
        expect(input).not.toHaveFocus()
        input.focus()
        expect(input).toHaveFocus()
    })

    // it('should upload file', async () => {
    //     setup()
    //     const fakeFile = new File(['test'], 'test.png', { type: 'image/png' })
    //     await act(async () => {
    //         await waitFor(() => {
    //             userEvent.upload(input, fakeFile)
    //         })
    //     })
    //     const result = input.files as FileList
    //     expect(result[0]).toStrictEqual(fakeFile)
    // })
})
