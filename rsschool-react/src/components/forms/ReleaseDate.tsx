/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { INewCardFormInputProps } from '../../utils/types'

export default class ReleaseDate extends Component<INewCardFormInputProps> {
    handleInput = () => this.props.setError('date')

    render = () => (
        <label>
            Release date
            <input name="date" type="date" onInput={this.handleInput} />
            <span>{this.props.message}</span>
        </label>
    )
}
