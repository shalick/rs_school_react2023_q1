/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { INewCardFormInputProps } from '../../utils/types'

export default class PosterUpload extends Component<INewCardFormInputProps> {
    handleInput = () => this.props.setError('image')

    render = () => (
        <>
            <label>
                Upload image
                <input
                    name="file"
                    type="file"
                    accept="image/*"
                    onInput={this.handleInput}
                />
            </label>
            <span>{this.props.message}</span>
        </>
    )
}
