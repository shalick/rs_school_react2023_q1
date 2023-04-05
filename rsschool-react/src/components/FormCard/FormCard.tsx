import React, { FC } from 'react'
import { IFormCard } from '../../utils/types'
import classes from './FormCard.module.css'

const FormCard: FC<IFormCard> = ({
    poster,
    title,
    date,
    category,
    streaming,
}) => {
    return (
        <li className={classes.movie}>
            <img src={poster as string} alt="poster"></img>
            <div className={classes.movieInfo}>
                <h3>{title}</h3>
                <h4>{date}</h4>
                <h4>{category}</h4>
                <h4>{streaming}</h4>
                {/* <h4>{watched}</h4> */}
            </div>
        </li>
    )
}

export default FormCard
