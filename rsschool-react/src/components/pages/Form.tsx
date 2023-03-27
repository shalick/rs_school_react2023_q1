import React, { Component } from 'react'
import NewCardForm from '../../components/NewCardForm/NewCardForm'
import { IFormData } from '../../utils/types'
import FormCardList from '../../components/FormCardList/FormCardList'

// import styles from './FormPage.module.scss'

export interface IFormPageState {
    formStatesArr: IFormData[] | []
}

export default class FormPage extends Component<
    Record<string, never>,
    IFormPageState
> {
    constructor(props: Record<string, never>) {
        super(props)
        this.setFormState = this.setFormState.bind(this)
        this.state = {
            formStatesArr: [],
        }
    }

    setFormState(newState: IFormData) {
        this.setState({
            formStatesArr: [newState, ...this.state.formStatesArr],
        })
    }

    render() {
        return (
            <div>
                <div data-testid="form-page">
                    <NewCardForm setFormState={this.setFormState} />
                </div>
                <FormCardList statesArr={this.state.formStatesArr} />
            </div>
        )
    }
}
