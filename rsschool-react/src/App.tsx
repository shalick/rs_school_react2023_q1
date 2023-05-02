import { Routes, Route } from 'react-router-dom'
import Main from './components/pages/Main'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import Form from './components/pages/Form'
import MainCard from './components/pages/MainCard'
import { Paths } from './utils/types'
import { Header } from './components/Header/Header'
import './index.css'

function App() {
    return (
        <div>
            <Routes>
                <Route path={Paths.MAIN} element={<Main />}></Route>
                <Route path={`${Paths.MAIN}:cardId`} element={<MainCard />} />
                <Route path={Paths.ABOUT} element={<About />} />
                <Route path={Paths.FORM} element={<Form />} />
                <Route path={Paths.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </div>
    )
}

function WrappedApp() {
    return (
        <>
            <Header />
            <App />
        </>
    )
}

export default WrappedApp
