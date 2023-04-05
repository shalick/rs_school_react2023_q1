import React from 'react'
import { INewCardFormInputProps } from '../../utils/types'

const WatchedCheckbox = ({
    data,
    register,
    error,
    clearErrors,
}: INewCardFormInputProps) => (
    <div>
        <label className="form_agree-container">
            {data.label}
            <input
                className="form_agree"
                type="checkbox"
                {...register(data.name, { ...data.register })}
                onInput={clearErrors}
            />
            <span className="form_agree-checkmark"></span>
        </label>
        <span className="form_error">{error}</span>
    </div>
)

export default WatchedCheckbox
