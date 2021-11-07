import React from 'react'

// router
import { Routes, Route} from 'react-router-dom'
import BookDetail from './pages/BookDetail'
import Books from './pages/Books'
import Checkout from './pages/Checkout'
import Home from './pages/Home'

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="books" element={<Books />} />
                <Route path="book-detail" element={<BookDetail />} />
                <Route path="checkout" element={<Checkout />} />
            </Routes>
        </div>
    )
}
