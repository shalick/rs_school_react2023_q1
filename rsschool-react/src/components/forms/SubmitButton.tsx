import React, { Component } from 'react'
import classes from './SubmitButton.module.css'

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
            <div className={classes.submitButtonContainer}>
                <button
                    className={classes.button}
                    type="submit"
                    disabled={isButtonDisabled}
                    data-testid="submit-button"
                >
                    Submit Movie Card
                </button>
            </div>
        )
    }
}
