import React from 'react'
import classes from './SubmitButton.module.css'

interface Props {
    isSaved: boolean
    isDisabled: boolean
}

const SubmitButton = ({ isSaved, isDisabled }: Props) => (
    <label className={classes.submitButtonContainer} htmlFor="submit">
        <input
            className={classes.button}
            name="submit"
            type="submit"
            disabled={isDisabled}
            data-testid="submit-button"
        />
        {isSaved ? <span>Card successfully saved</span> : null}
    </label>
)

export default SubmitButton
