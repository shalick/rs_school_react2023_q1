import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import PosterUpload from './PosterUpload'
import { vi } from 'vitest'

const message = 'error_message'
const func = vi.fn()
const data = {
    name: 'poster',
    label: 'Upload poster',
    register: {
        validate: func,
    },
}

describe('Poster uploader component', () => {
    it('render uploader without error', () => {
        render(<PosterUpload data={data} register={func} clearErrors={func} />)
        const upload = screen.getByLabelText<HTMLInputElement>(data.label)
        expect(upload).toBeInTheDocument()
        expect(upload.files).toHaveLength(0)
    })

    it('render uploader with error', () => {
        render(
            <PosterUpload
                data={data}
                error={message}
                register={func}
                clearErrors={func}
            />
        )
        expect(screen.getByText(message)).toBeInTheDocument()
    })
    it('should upload file with input file', async () => {
        render(<PosterUpload data={data} register={func} clearErrors={func} />);
        const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })
        const posterInput = screen.getByLabelText<HTMLInputElement>(data.label)
        await waitFor(() =>
            fireEvent.change(posterInput, {
                target: { files: [file] },
            })
        )

        if (posterInput.files) {
            expect(posterInput.files[0]).toStrictEqual(file)
        }
    })
})
