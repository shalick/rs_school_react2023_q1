import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/pages/Main'
import NotFound from './components/pages/NotFound'
import About from './components/pages/NotFound'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
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
