import { INewCardFormInputProps } from '../../utils/types'

const MovieTitleText = ({
    data,
    register,
    error,
    clearErrors,
}: INewCardFormInputProps) => (
    <label className="form_field">
        {data.label}
        <input
            className="form_name"
            type="text"
            {...register(data.name, { ...data.register })}
            onInput={clearErrors}
        />
        <span className="form_error">{error}</span>
    </label>
)

export default MovieTitleText
