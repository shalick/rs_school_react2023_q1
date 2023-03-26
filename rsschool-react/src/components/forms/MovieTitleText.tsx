/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { INewCardFormInputProps } from '../../utils/types'

export default class MovieTitleText extends Component<INewCardFormInputProps> {
    handleInput = () => this.props.setError('movieTitle')

    render = () => (
        <label>
            Movie Title
            <input name="movieTitle" type="text" onInput={this.handleInput} />
            <span>{this.props.message}</span>
        </label>
    )
}
