import { useState, useEffect } from 'react'
import React from 'react'
import { CardsList } from '../CardsList/CardsList'
import { movies } from '../../utils/movies'
import { Search } from '../Search/Search'
// import api from '../../api/rickandmortyapi'
// function Main() {
//     return <CardsList movies={movies || []} />
// }

const Main = () => {
    const [searchMovie, setSearchWord] = useState(
        localStorage.getItem('searchWord') || ''
    )
    // const [movies, setMovies] = useState([])
    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         try {
    //             const response = await api.get('/titles')
    //             setMovies(response.data)
    //         } catch (err) {
    //             if (err.response) {
    //                 console.log(err.response.data)
    //                 console.log(err.response.status)
    //                 console.log(err.response.headers)
    //             } else {
    //                 console.log(`Error: ${err.message}`)
    //             }
    //         }
    //     }
    //     fetchMovies()
    // }, [])
    return (
        <>
            <Search
                searchMovie={searchMovie}
                setSearchWord={(value) => setSearchWord(value)}
            />
            <CardsList searchWord={searchMovie} />
            {/* <Search /> */}
            {/* <CardsList movies={movies} /> */}
        </>
    )
}

export default Main
