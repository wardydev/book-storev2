import React from 'react'
import About from './pages/About'
import Home from './pages/Home'

// router
import { Routes, Route} from 'react-router-dom'

export default function App() {
    return (
        <div className="app">
            <h1>Welcome to React Router!</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    )
}
