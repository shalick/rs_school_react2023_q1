import { useCallback, useContext, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './MainCard.css'
import { AppContext } from '../context/AppContext'
import ModalMovieCard from '../ModalMovieCard/ModalMovieCard'
import { Paths } from '../../utils/types'
import './MainCard.css'

const MainCard = () => {
    const { cardId } = useParams()
    const { state } = useContext(AppContext)
    const navigate = useNavigate()
    const [data] = state.mainCards.filter(({ id }) => id === Number(cardId))
    const shouldRedirect = useRef(false)
    const navigateMain = useCallback(() => navigate(Paths.MAIN), [navigate])

    useEffect(() => {
        shouldRedirect.current = !data
    }, [data])

    useEffect(() => {
        if (shouldRedirect.current) navigateMain()
    })

    return (
        <div className="main-card">
            <button className="main-card_back" onClick={navigateMain}>
                Back
            </button>
            <ModalMovieCard data={data} />
        </div>
    )
}

export default MainCard
