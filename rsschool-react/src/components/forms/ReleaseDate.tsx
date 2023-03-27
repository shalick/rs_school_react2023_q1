/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'

export interface IReleaseDateInputProps {
    forwardRef: React.RefObject<HTMLInputElement>
}

export default class ReleaseDate extends Component<IReleaseDateInputProps> {
    render() {
        const { forwardRef } = this.props
        return (
            <label>
                Release date
                <input
                    name="date"
                    type="date"
                    ref={forwardRef}
                    data-testId="date-input"
                />
            </label>
        )
    }
}
