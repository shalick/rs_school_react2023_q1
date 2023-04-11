import React from 'react'
import classes from './MovieCard.module.css'
import { ICharacter } from '../../api/rickandmortyapi'

interface IProps {
    data: ICharacter
    handleModal: () => void
}

const MovieCard = (props: IProps) => {
    return (
        <li
            className={classes.movie}
            onClick={props.handleModal}
            data-testid="card"
        >
            <img src={props.data.image}></img>
            <h3 className={classes.movieInfo}>{props.data.name}</h3>
        </li>
    )
}

export default MovieCard
