import React, { useState, useCallback, useContext } from 'react'
import NewCardForm from '../../components/NewCardForm/NewCardForm'
import { ICardGen } from '../../utils/types'
import FormCardList from '../../components/FormCardList/FormCardList'
import Modal from '../Modal/Modal'
import { Actions } from '../../utils/reducers/appReducer'
import { AppContext } from '../../components/context/AppContext'

import classes from './Form.module.css'

const FormPage = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const { state, dispatch } = useContext(AppContext)
    const setCards = useCallback(
        (card: ICardGen) =>
            dispatch({ type: Actions.ADD_FORM_CARD, payload: { ...card } }),
        [dispatch]
    )

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
                        <NewCardForm setCards={setCards} />
                    </Modal>
                )}
            </div>
            <FormCardList statesArr={state.formCards} />
        </section>
    )
}

export default FormPage
