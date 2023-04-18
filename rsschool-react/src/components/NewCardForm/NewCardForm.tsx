import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICardGen, IFormDataValues } from '../../utils/types'
import { formFields } from '../../utils/formFields'
import MovieTitleText from '../forms/MovieTitleText'
import ReleaseDate from '../forms/ReleaseDate'
import CategorySelect from '../forms/CategorySelect'
import StreamingSwitcher from '../forms/StreamingSwitcher'
import WatchedCheckbox from '../forms/WatchedCheckbox'
import PosterUpload from '../forms/PosterUpload'
import SubmitButton from '../forms/SubmitButton'
import classes from './NewCardForm.module.css'

export interface INewCardFormProps {
    // setCards: Dispatch<SetStateAction<ICardGen[]>>
    setFormState: (card: ICardGen) => void
}

const NewCardForm: FC<INewCardFormProps> = ({ setFormState }) => {
    const { register, formState, handleSubmit, reset, clearErrors } =
        useForm<IFormDataValues>({
            mode: 'onSubmit',
            reValidateMode: 'onSubmit',
        })
    const { isDirty, isSubmitSuccessful, errors } = formState

    const onSubmit: SubmitHandler<IFormDataValues> = (data) => {
        const { title, date, category, streaming } = data
        // const watched = Boolean(data.watched)
        setFormState({
            title: title,
            date: date,
            category: category,
            streaming: streaming,
            // watched: watched,
            poster: URL.createObjectURL(data.poster[0] as unknown as Blob),
        })
        reset()
    }

    return (
        <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            data-testid="form"
        >
            <MovieTitleText
                data={formFields.title}
                error={errors[formFields.title.name]?.message}
                register={register}
                clearErrors={() => clearErrors(formFields.title.name)}
            />
            <ReleaseDate
                data={formFields.date}
                error={errors[formFields.date.name]?.message}
                register={register}
                clearErrors={() => clearErrors(formFields.date.name)}
            />
            <CategorySelect
                data={formFields.category}
                error={errors[formFields.category.name]?.message}
                register={register}
                clearErrors={() => clearErrors(formFields.category.name)}
            />
            <StreamingSwitcher
                data={formFields.streaming}
                error={errors[formFields.streaming.name]?.message}
                register={register}
                clearErrors={() => clearErrors(formFields.streaming.name)}
            />
            <WatchedCheckbox
                data={formFields.watched}
                error={errors[formFields.watched.name]?.message}
                register={register}
                clearErrors={() => clearErrors(formFields.watched.name)}
            />
            <PosterUpload
                data={formFields.poster}
                error={errors[formFields.poster.name]?.message}
                register={register}
                clearErrors={() => clearErrors(formFields.poster.name)}
            />
            <SubmitButton
                isSaved={isSubmitSuccessful}
                isDisabled={!(isDirty && !Object.keys(errors).length)}
            />
        </form>
    )
}

export default NewCardForm
