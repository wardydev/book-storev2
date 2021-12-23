import React from 'react'

// router
import { Routes, Route} from 'react-router-dom'
import LearnRedux from './LearnRedux'
import BookDetail from './pages/BookDetail'
import Books from './pages/Books'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'


export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="books" element={<Books />} />
                <Route path="detail-book" element={<BookDetail />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="cart" element={<Cart />} />
                <Route path="redux" element={<LearnRedux />} />
            </Routes>
        </div>
    )
}
