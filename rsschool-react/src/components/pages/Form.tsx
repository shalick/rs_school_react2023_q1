import React, { useState } from 'react'
// import NewCardForm from '../../components/NewCardForm/NewCardForm'
// import { ICardGen } from '../../utils/types'
// import FormCardList from '../../components/FormCardList/FormCardList'
import Modal from '../Modal/Modal'
// import { useAppSelector, useAppDispatch } from '../../hooks/redux'
// import genCardsSlice from '../../store/reducers/GenCardsSlice'

import classes from './Form.module.css'

const FormPage = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    // const { cards } = useAppSelector((state) => state.genCardsReducer)
    // const { add } = genCardsSlice.actions
    // const dispatch = useAppDispatch()

    // const setCards = (card: ICardGen) => dispatch(add(card))

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
                        {/* <NewCardForm setCards={setCards} /> */}
                    </Modal>
                )}
            </div>
            {/* <FormCardList statesArr={cards} /> */}
        </section>
    )
}

export default FormPage
