/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'

export interface ICateorySelectProps {
    forwardRef: React.RefObject<HTMLSelectElement>
}

export default class CategorySelect extends Component<ICateorySelectProps> {
    render() {
        const { forwardRef } = this.props
        return (
            <label>
                Category
                <select name="category" ref={forwardRef} defaultValue={''}>
                    <option disabled></option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Romance</option>
                    <option>Animation</option>
                    <option>Comedy</option>
                    <option>Crime</option>
                    <option>Thriller</option>
                </select>
            </label>
        )
    }
}
