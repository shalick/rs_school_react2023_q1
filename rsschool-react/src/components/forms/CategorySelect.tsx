import react from 'react'
import { INewCardFormInputProps } from '../../utils/types'

const CategorySelect = ({
    data,
    register,
    error,
    clearErrors,
}: INewCardFormInputProps) => (
    <label className="form_field">
        {data.label}
        <select
            className="form_category"
            defaultValue={data.options ? data.options[0] : ''}
            {...register(data.name, { ...data.register })}
            onInput={clearErrors}
        >
            {data.options?.map((item, idx) => (
                <option key={idx} disabled={idx === 0}>
                    {item}
                </option>
            ))}
        </select>
        <span className="form_error">{error}</span>
    </label>
)

export default CategorySelect
