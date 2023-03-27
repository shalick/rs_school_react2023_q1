/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'

export interface IWatchedCheckboxProps {
    forwardRef: React.RefObject<HTMLInputElement>
}

export default class WatchedCheckbox extends Component<
    IWatchedCheckboxProps,
    Record<string, never>
> {
    render() {
        const { forwardRef } = this.props
        return (
            <label>
                Watched this movie.
                <input
                    name="watched"
                    type="checkbox"
                    ref={forwardRef}
                    data-testid="watched-checkbox"
                />
            </label>
        )
    }
}
