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

            <section className="side-menus px-20 mt-12 flex space-x-8">
                <div className="w-1/4">
                    <h2 className="text-gray-900 font-bold text-3xl">Filter Option</h2>

                    <div className="menus mt-6">
                        <Link to="/books" className="flex items-center justify-between border border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Editor Picks</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Choose Publisher</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Select Year</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Shop By Category</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/books" className="flex items-center justify-between border border-gray-100 mt-1 rounded-lg px-6 py-4">
                            <span className="font-medium text-gray-800">Price Range</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <div className="mt-6">
                            <button className="w-full py-2 mb-4 bg-purple-600 hover:bg-purple-700 text-gray-50 rounded-lg">Refine Search</button>
                            <button className="w-full py-2 border hover:bg-gray-100 border-gray-200 text-gray-500 rounded-lg">Reset Filter</button>
                        </div>
                    </div>
                </div>
                <BookCollection />
            </section>
            <BookOnSale />
            <div className="py-16">
                <Features />
            </div>
            <Newsletter />
        </Layout>
    )
}
