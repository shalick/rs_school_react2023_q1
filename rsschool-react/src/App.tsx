import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Main from './components/pages/Main'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'

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
