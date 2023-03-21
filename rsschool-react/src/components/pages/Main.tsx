import { Component } from 'react'
import React from 'react'
import { CardsList } from '../CardsList/CardsList'
import { movies } from '../../utils/movies'
import { Search } from '../Search/Search'
// function Main() {
//     return <CardsList movies={movies || []} />
// }

export class Main extends Component {
    render = () => (
        <>
            <Search />
            <CardsList movies={movies} />
        </>
    )
}

export default Main
