import React, { useState } from 'react'
import { CardsList } from '../CardsList/CardsList'
import { Search } from '../Search/Search'
import Pagination from '../Pagintaion/Pagination'

const Main = () => {
    const [searchMovie, setSearchWord] = useState(
        localStorage.getItem('searchMovie') || ''
    )

    return (
        <>
            <Search
                searchMovie={searchMovie}
                setSearchWord={(value) => setSearchWord(value)}
            />
            <CardsList searchWord={searchMovie} />
            <Pagination />
        </>
    )
}

export default Main
