import React from 'react'
import { Component } from 'react'
import classes from './MovieCard.module.css'
import { IMovieCard } from '../../utils/types'

export class MovieCard extends Component<IMovieCard> {
    render = () => (
        <li className={classes.movie}>
            <img src={this.props.poster}></img>
            <div className={classes.movieInfo}>
                <h3>{this.props.name}</h3>
                <h4>{this.props.director}</h4>
            </div>
            <div className={classes.overview}>
                <p>{this.props.storyline}</p>
            </div>
        </li>
    )
}
