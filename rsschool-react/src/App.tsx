import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Main from './components/pages/Main'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import Form from './components/pages/Form'
// import NewCardForm from './components/NewCardForm/NewCardForm'

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Layout pageTitle="Main" page={<Main />} />}
                />
                <Route
                    path="about"
                    element={<Layout pageTitle="About" page={<About />} />}
                />
                <Route
                    path="form"
                    element={<Layout pageTitle="Form" page={<Form />} />}
                />
                <Route
                    path="*"
                    element={
                        <Layout pageTitle="NotFound" page={<NotFound />} />
                    }
                />
            </Routes>
        </div>
    )
}

function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

export default WrappedApp
