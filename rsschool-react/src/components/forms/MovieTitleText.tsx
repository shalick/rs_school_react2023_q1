/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'

export interface IMovieTitleInputProps {
    forwardRef: React.RefObject<HTMLInputElement>
}

export default class MovieTitleText extends Component<
    IMovieTitleInputProps,
    Record<string, never>
> {
    render() {
        const { forwardRef } = this.props
        return (
            <label>
                Movie Title
                <input name="movieTitle" type="text" ref={forwardRef} />
            </label>
        )
    }
}
