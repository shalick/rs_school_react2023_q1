import React, { FC } from 'react'
import { ICardGen, IFormData } from '../../utils/types'
import FormCard from '../FormCard/FormCard'

import classes from './FormCardList.module.css'

export interface IFormCardListProps {
    statesArr: ICardGen[]
}

const FormCardList: FC<IFormCardListProps> = ({ statesArr }) => {
    const generateCards = () => {
        return statesArr.map((el: ICardGen, idx: number) => {
            return (
                <FormCard
                    key={idx}
                    index={statesArr.length - idx}
                    poster={el.poster}
                    title={el.title}
                    date={el.date}
                    category={el.category}
                    streaming={el.streaming}
                    watched={true}
                />
            )
        }) as JSX.Element[]
    }


    return (
        <ul className={classes.cardsContainer} data-testid="form-card-list">
            {generateCards()}
        </ul>
    )
}

export default FormCardList