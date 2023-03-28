import React, { Component } from 'react'

export interface ISubmitButtonProps {
    isButtonDisabled: boolean
    // onClose: () => void
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
                // onClick={onClose}
            >
                Submit Movie Card
            </button>
        )
    }
}
