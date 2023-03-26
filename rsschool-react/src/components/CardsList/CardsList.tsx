import React from 'react'
import { Component } from 'react'
import { IMovieCard } from '../../utils/types'
import { MovieCard } from '../MovieCard/MovieCard'
import NewCard from '../NewCard/NewCard'
import classes from './CardsList.module.css'

interface IProps {
    movies: IMovieCard[]
}

export class CardsList extends Component<IProps> {
    state: { cards: IMovieCard[] }
    constructor(props: IProps) {
        super(props)
        this.state = { cards: this.props.movies }
    }

    render = () => (
        <>
            <NewCard />
            <ul className={classes.moviesContainer}>
                {this.state.cards.map(
                    ({
                        id,
                        poster,
                        name,
                        year,
                        runtime,
                        categories,
                        release_date,
                        director,
                        writer,
                        actors,
                        storyline,
                    }) => (
                        <MovieCard
                            key={id}
                            id={id}
                            poster={poster}
                            name={name}
                            year={year}
                            runtime={runtime}
                            categories={categories}
                            release_date={release_date}
                            director={director}
                            writer={writer}
                            actors={actors}
                            storyline={storyline}
                        />
                    )
                )}
            </ul>
        </>
    )
}
