/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { INewCardFormInputProps } from '../../utils/types'

export default class StreamingSwitcher extends Component<INewCardFormInputProps> {
    handleInput = () => this.props.setError('streaming')

    render = () => (
        <div>
            <input
                id="None"
                name="streaming"
                type="radio"
                value="None"
                onInput={this.handleInput}
            />
            <label htmlFor="None">None</label>
            <input
                id="Netflix"
                name="streaming"
                type="radio"
                value="Netflix"
                onInput={this.handleInput}
            />
            <label htmlFor="Netflix">Netflix</label>
            <input
                id="Disney+"
                name="streaming"
                type="radio"
                value="Disney+"
                onInput={this.handleInput}
            />
            <label htmlFor="Disney+">Disney+</label>
            <input
                id="HBO Max"
                name="streaming"
                type="radio"
                value="HBO Max"
                onInput={this.handleInput}
            />
            <label htmlFor="HBO Max">HBO Max</label>
            <input
                id="Apple TV"
                name="streaming"
                type="radio"
                value="Apple TV"
                onInput={this.handleInput}
            />
            <label htmlFor="Apple TV">Apple TV</label>
            <input
                id="Others"
                name="streaming"
                type="radio"
                value="Others"
                onInput={this.handleInput}
            />
            <label htmlFor="Others">Others</label>
            <span>{this.props.message}</span>
        </div>
    )
}
