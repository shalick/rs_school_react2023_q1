import React from 'react'
import classes from './MovieCard.module.css'
import { IMovieCard } from '../../utils/types'
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
            <img className="card_image" src={props.data.image}></img>
            <h3 className="card_title">{props.data.name}</h3>
        </li>
    )
    // <li className={classes.movie}>
    //     <img src={this.props.poster}></img>
    //     <div className={classes.movieInfo}>
    //         <h3>{this.props.name}</h3>
    //         <h4>{this.props.director}</h4>
    //     </div>
    //     <div className={classes.overview}>
    //         <p>{this.props.storyline}</p>
    //     </div>
    // </li>
}

export default MovieCard
