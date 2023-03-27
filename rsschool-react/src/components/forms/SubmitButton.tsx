import React, { Component } from 'react'

export interface ISubmitButtonProps {
    isButtonDisabled: boolean
}

export default class SubmitButton extends Component<
    ISubmitButtonProps,
    Record<string, never>
> {
    render() {
        const { isButtonDisabled } = this.props
        return (
            <button
                type="submit"
                disabled={isButtonDisabled}
                data-testid="submit-button"
            >
                Submit Movie Card
            </button>
        )
    }
}
