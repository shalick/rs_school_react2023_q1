/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'

export interface IPosterUploadProps {
    forwardRef: React.RefObject<HTMLInputElement>
}

export default class PosterUpload extends Component<
    IPosterUploadProps,
    Record<string, never>
> {
    render() {
        const { forwardRef } = this.props
        return (
            <label>
                Upload poster
                <input
                    name="file"
                    type="file"
                    ref={forwardRef}
                    accept="image/*"
                    data-testid="file-input"
                />
            </label>
        )
    }
}
