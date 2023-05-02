import { CardsList } from '../CardsList/CardsList'
import { Search } from '../Search/Search'
import Pagination from '../Pagintaion/Pagination'

const Main = () => {
    return (
        <>
            <section>
                <Search />
                <Pagination />
            </section>
            <section>
                <CardsList />
            </section>
        </>
    )
}

export default Main
