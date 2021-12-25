import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumbs() {
    return (
        <section className="px-6 lg:px-20 mt-32">
            <div className="flex items-center space-x-2">
                <Link to="/" className="text-purple-500 font-medium">Home /</Link>
                <Link to="/books" className="text-gray-400 font-medium">Books</Link>
            </div>
        </section>
    )
}
