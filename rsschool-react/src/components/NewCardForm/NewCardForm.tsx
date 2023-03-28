import React from 'react'
import { Component, createRef } from 'react'
import { IFormData, INewCardFormRef } from '../../utils/types'
import MovieTitleText from '../forms/MovieTitleText'
import ReleaseDate from '../forms/ReleaseDate'
import CategorySelect from '../forms/CategorySelect'
import StreamingSwitcher from '../forms/StreamingSwitcher'
import WatchedCheckbox from '../forms/WatchedCheckbox'
import PosterUpload from '../forms/PosterUpload'
import SubmitButton from '../forms/SubmitButton'
import classes from './NewCardForm.module.css'

export interface INewCardFormProps {
    handleFormState: (state: IFormData) => void
    // onClose: () => void
}

export interface INewCardFormState {
    isButtonDisabled: boolean
}

export const fileReader = (blob: Blob) => {
    if (!blob) return ''
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(blob)
    })
}

class NewCardForm extends Component<INewCardFormProps, INewCardFormState> {
    formRef: INewCardFormRef

    constructor(props: INewCardFormProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.toggleModalActive = this.toggleModalActive.bind(this)
        // this.errReset = this.errReset.bind(this)
        this.state = {
            // errorsArr: [],
            isButtonDisabled: false,
            // isModalActive: false,
        }
        this.formRef = {
            common: createRef(),
            title: createRef(),
            date: createRef(),
            category: createRef(),
            streaming: createRef(),
            watched: createRef(),
            poster: createRef(),
        }
    }

    resetForm() {
        this.formRef.common.current?.reset()
        this.setState({ isButtonDisabled: false })
    }

    async handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const {
            title: titleRef,
            date: dateRef,
            category: categoryRef,
            streaming: streamingRef,
            watched: watchedRef,
            poster: posterRef,
        } = this.formRef
        const title = titleRef.current?.value || ''
        const date = dateRef.current?.value || ''
        const category = categoryRef.current?.value || ''
        const streaming = streamingRef.current?.checked ? 'yes' : 'no'
        const watched = watchedRef.current?.checked || false
        let poster: string | null = null
        if (posterRef.current?.files) {
            poster = (await fileReader(posterRef.current?.files[0])) as string
        }
        this.props.handleFormState({
            title,
            date,
            category,
            streaming,
            watched,
            poster,
        })
        this.resetForm()
    }

    render() {
        const { isButtonDisabled } = this.state
        // const { onClose } = this.props
        // const onClose = this.props.onClose
        const { title, date, category, streaming, watched, poster } =
            this.formRef
        return (
            <form
                className={classes.form}
                ref={this.formRef.common}
                onSubmit={this.handleSubmit}
                data-testid="form"
            >
                <MovieTitleText forwardRef={title} />
                <ReleaseDate forwardRef={date} />
                <CategorySelect forwardRef={category} />
                <StreamingSwitcher forwardRef={streaming} />
                <WatchedCheckbox forwardRef={watched} />
                <PosterUpload forwardRef={poster} />
                <SubmitButton
                    isButtonDisabled={isButtonDisabled}
                    // onClose={onClose}
                />
            </form>
        )
    }
}

export default NewCardForm
