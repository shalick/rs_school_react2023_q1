import React, { Component } from 'react'
import NewCardForm from '../../components/NewCardForm/NewCardForm'
import { IFormData } from '../../utils/types'
import FormCardList from '../../components/FormCardList/FormCardList'
import Modal from '../Modal/Modal'

import classes from './Form.module.css'

export interface IFormPageState {
    formStatesArr: IFormData[] | []
    modalIsVisible: boolean
}

export default class FormPage extends Component<
    Record<string, never>,
    IFormPageState
> {
    constructor(props: Record<string, never>) {
        super(props)
        this.handleFormState = this.handleFormState.bind(this)
        this.hideModalHandler = this.hideModalHandler.bind(this)
        this.showModalHandler = this.showModalHandler.bind(this)
        this.state = {
            formStatesArr: [],
            modalIsVisible: false,
        }
    }

    hideModalHandler() {
        this.setState({ modalIsVisible: false })
    }

    showModalHandler() {
        this.setState({ modalIsVisible: true })
    }

    handleFormState(newState: IFormData) {
        this.setState({
            formStatesArr: [newState, ...this.state.formStatesArr],
        })
    }

    render() {
        return (
            <div className={classes.formContainer}>
                <button
                    className={classes.button}
                    onClick={this.showModalHandler}
                >
                    New Card
                </button>
                <div data-testid="form-page">
                    {this.state.modalIsVisible && (
                        <Modal onClose={this.hideModalHandler}>
                            <NewCardForm
                                handleFormState={this.handleFormState}
                                onClose={this.hideModalHandler}
                            />
                        </Modal>
                    )}
                </div>
                <FormCardList statesArr={this.state.formStatesArr} />
            </div>
        )
    }
}
