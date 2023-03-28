/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
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
})
