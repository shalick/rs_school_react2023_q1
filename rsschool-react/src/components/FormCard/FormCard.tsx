import React from 'react'
import { Component } from 'react'
import classes from './FormCard.module.css'
import { IFormCard } from '../../utils/types'
export class FormCard extends Component<IFormCard> {
    render = () => (
        <li className={classes.movie}>
            <img src={this.props.poster as string} alt="poster"></img>
            <div className={classes.movieInfo}>
                <h3>{this.props.title}</h3>
                <h4>{this.props.date}</h4>
                <h4>{this.props.category}</h4>
                <h4>{this.props.streaming}</h4>
                <h4>{this.props.watched}</h4>
            </div>
        </li>
    )
}
