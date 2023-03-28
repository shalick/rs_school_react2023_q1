import React, { Component } from 'react'
import { IFormData } from '../../utils/types'
import { FormCard } from '../FormCard/FormCard'

import classes from './FormCardList.module.css'

export interface IFormCardListProps {
    statesArr: IFormData[]
}

export default class FormCardList extends Component<IFormCardListProps> {
    generateCards() {
        return this.props.statesArr.map((el: IFormData, idx: number) => {
            return (
                <FormCard
                    key={idx}
                    index={this.props.statesArr.length - idx}
                    poster={el.poster}
                    title={el.title}
                    date={el.date}
                    category={el.category}
                    streaming={el.streaming}
                    watched={el.watched}
                />
            )
        }) as JSX.Element[]
    }

    render() {
        return (
            <ul className={classes.cardsContainer} data-testid="form-card-list">
                {this.generateCards()}
            </ul>
        )
    }
}
