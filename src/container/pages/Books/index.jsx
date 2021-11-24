import React from 'react'
import { Link } from 'react-router-dom'

// component
import BookOnSale from '../../components/BookOnSale'
import Features from '../../components/Features'
import Layout from '../../components/Layout'
import Newsletter from '../../components/Newsletter'
import BookCollection from '../../sections/books/BookCollection'
import BreadCrumbs from '../../sections/books/BreadCrumbs'

export default function Books() {
    return (
        <Layout>

            <BreadCrumbs />

            <section className="side-menus px-20 mt-12 w-1/3">
                <div>
                    <h2 className="text-gray-900 font-bold text-3xl">Filter Option</h2>

                    <div className="menus mt-6">
                        <Link to="/books" className="flex items-center justify-between border-2 border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Editor Picks</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border-2 border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Choose Publisher</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border-2 border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Select Year</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border-2 border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Shop By Category</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border-2 border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Price Range</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <BookCollection />

            <BookOnSale />
            <div className="py-16">
                <Features />
            </div>
            <Newsletter />
        </Layout>
    )
}
