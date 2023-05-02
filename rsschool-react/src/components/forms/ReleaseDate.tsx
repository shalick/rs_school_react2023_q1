import React from 'react'
import { INewCardFormInputProps } from '../../utils/types'

const ReleaseDate = ({
    data,
    register,
    error,
    clearErrors,
}: INewCardFormInputProps) => (
    <label className="form_field">
        {data.label}
        <input
            className="form_date"
            type="date"
            {...register(data.name, { ...data.register })}
            onInput={clearErrors}
        />
        <span className="form_error">{error}</span>
    </label>
)

export default ReleaseDate
