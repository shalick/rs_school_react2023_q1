/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { INewCardFormInputProps } from '../../utils/types'

export default class CategorySelect extends Component<INewCardFormInputProps> {
    handleInput = () => this.props.setError('category')

    render = () => (
        <label>
            Country
            <select
                name="category"
                defaultValue={''}
                onInput={this.handleInput}
            >
                <option disabled></option>
                <option>Action</option>
                <option>Drama</option>
                <option>Romance</option>
                <option>Animation</option>
                <option>Comedy</option>
                <option>Crime</option>
                <option>Thriller</option>
            </select>
            <span>{this.props.message}</span>
        </label>
    )
}
