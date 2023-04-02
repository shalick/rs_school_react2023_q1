import React, { useEffect, useState } from 'react'
import { Component } from 'react'
import { IMovieCard } from '../../utils/types'
import { MovieCard } from '../MovieCard/MovieCard'
import NewCard from '../NewCardForm/NewCardForm'
import classes from './CardsList.module.css'

interface IProps {
    movies: IMovieCard[]
}

export const CardsList = (props: IProps) => {
    const [movieCards, setMovieCards] = useState(props.movies);
    useEffect(() => setMovieCards(props.movies), [])

    return (
        <>
            <ul className={classes.moviesContainer}>
                {movieCards.map(
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

// export default CardsList