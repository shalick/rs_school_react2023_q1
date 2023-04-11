import React, { useState } from 'react'
import { CardsList } from '../CardsList/CardsList'
import { Search } from '../Search/Search'

const Main = () => {
    const [searchMovie, setSearchWord] = useState(
        localStorage.getItem('searchWord') || ''
    )

    return (
        <>
            <Search
                searchMovie={searchMovie}
                setSearchWord={(value) => setSearchWord(value)}
            />
            <CardsList searchWord={searchMovie} />
        </>
    )
}

export default Main
