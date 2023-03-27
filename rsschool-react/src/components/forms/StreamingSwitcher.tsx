/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'

export interface IStreamingSwitcherProps {
    forwardRef: React.RefObject<HTMLInputElement>
}

export default class StreamingSwitcher extends Component<IStreamingSwitcherProps> {
    render() {
        const { forwardRef } = this.props
        return (
            <div>
                <input
                    id="None"
                    name="streaming"
                    type="radio"
                    value="None"
                    ref={forwardRef}
                />
                <label htmlFor="None">None</label>
                <input
                    id="Netflix"
                    name="streaming"
                    type="radio"
                    value="Netflix"
                    ref={forwardRef}
                />
                <label htmlFor="Netflix">Netflix</label>
                <input
                    id="Disney+"
                    name="streaming"
                    type="radio"
                    value="Disney+"
                    ref={forwardRef}
                />
                <label htmlFor="Disney+">Disney+</label>
                <input
                    id="HBO Max"
                    name="streaming"
                    type="radio"
                    value="HBO Max"
                    ref={forwardRef}
                />
                <label htmlFor="HBO Max">HBO Max</label>
                <input
                    id="Apple TV"
                    name="streaming"
                    type="radio"
                    value="Apple TV"
                    ref={forwardRef}
                />
                <label htmlFor="Apple TV">Apple TV</label>
                <input
                    id="Others"
                    name="streaming"
                    type="radio"
                    value="Others"
                    ref={forwardRef}
                />
                <label htmlFor="Others">Others</label>
            </div>
        )
    }
}
