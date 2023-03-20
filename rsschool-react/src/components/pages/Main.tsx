import { Component } from 'react'
import React from 'react'
import { CardsList } from '../CardsList/CardsList'
import { movies } from '../../utils/movies'
// function Main() {
//     return <CardsList movies={movies || []} />
// }

export class Main extends Component {
    render = () => (
        <>
            <CardsList movies={movies} />
        </>
    )
}

export default Main
