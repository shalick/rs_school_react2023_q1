/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { INewCardFormInputProps } from '../../utils/types'

export default class WatchedCheckbox extends Component<INewCardFormInputProps> {
    handleInput = () => this.props.setError('watched')

    render = () => (
        <>
            <label>
                Watched this movie.
                <input
                    name="watched"
                    type="checkbox"
                    onInput={this.handleInput}
                />
                <span></span>
            </label>
            <span>{this.props.message}</span>
        </>
    )
}
