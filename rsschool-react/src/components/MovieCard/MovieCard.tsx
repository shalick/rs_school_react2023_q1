import React from 'react'
import classes from './MovieCard.module.css'
import { ICharacter } from '../../api/rickandmortyapi'
import { Paths } from '../../utils/types'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
    data: ICharacter
}

const MovieCard = ({ data }: IProps) => (
    <>
        <Link to={`${Paths.MAIN}${data.id}`} key={data.id}>
            <li className={classes.movie} data-testid="card">
                <img src={data.image}></img>
                <h3 className={classes.movieInfo}>{data.name}</h3>
            </li>
        </Link>
        <Outlet />
    </>
)

export default MovieCard
