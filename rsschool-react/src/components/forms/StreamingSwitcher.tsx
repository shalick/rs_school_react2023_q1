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
                    id="Yes"
                    name="streaming"
                    type="radio"
                    value="Yes"
                    ref={forwardRef}
                />
                <label htmlFor="Yes">Yes</label>
                <input
                    id="No"
                    name="streaming"
                    type="radio"
                    value="No"
                    ref={forwardRef}
                />
                <label htmlFor="No">No</label>
                {/* <input
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
                <label htmlFor="Others">Others</label> */}
            </div>
        )
    }
}
