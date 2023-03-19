import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/NotFound'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
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
