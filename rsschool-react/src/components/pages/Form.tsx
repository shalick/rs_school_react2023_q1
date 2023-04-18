import React, { useState } from 'react'
import NewCardForm from '../../components/NewCardForm/NewCardForm'
import { ICardGen } from '../../utils/types'
import FormCardList from '../../components/FormCardList/FormCardList'
import Modal from '../Modal/Modal'
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { setFormStatesArr } from '../../store/reducers/FormCardsSlice'

import classes from './Form.module.css'

const FormPage = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const { formStatesArr } = useAppSelector((state) => state.formCardsReducer)
    const dispatch = useAppDispatch()

    const setFormState = (newState: ICardGen) => {
        dispatch(setFormStatesArr([newState, ...formStatesArr]))
    }

    function hideModalHandler() {
        setModalIsVisible(false)
    }
    function showModalHandler() {
        setModalIsVisible(true)
    }
    return (
        <section className={classes.formContainer}>
            <button className={classes.button} onClick={showModalHandler}>
                New Card
            </button>
            <div data-testid="form-page">
                {modalIsVisible && (
                    <Modal onClose={hideModalHandler}>
                        <NewCardForm setFormState={setFormState} />
                    </Modal>
                )}
            </div>
            <FormCardList statesArr={formStatesArr} />
        </section>
    )
}

export default FormPage
