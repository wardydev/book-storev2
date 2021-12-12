import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// component
import BookOnSale from '../../components/BookOnSale'
import Features from '../../components/Features'
import Layout from '../../components/Layout'
import Newsletter from '../../components/Newsletter'
import BookCollection from '../../sections/books/BookCollection'
import BreadCrumbs from '../../sections/books/BreadCrumbs'

export default function Books() {
    const [filterOption, setFilterOption] = useState(false)
    const [bestSales, setBestSales] = useState(false)

    const handleFilterOption = () => {
        setFilterOption(!filterOption)
        setBestSales(false)
    }

    return (
        <Layout>

            <BreadCrumbs />

            <section className="side-menus px-6 lg:px-20 mt-12 flex space-x-0 lg:space-x-8">
                <div className="w-full lg:w-1/4 hidden lg:block">
                    <h2 className="text-gray-900 font-bold text-3xl">Filter Option</h2>

                    <div className="menus mt-6">
                        <Link to="/books" className="flex items-center justify-between border border-gray-100 mt-1 rounded-lg px-6 py-4" onClick={handleFilterOption}>
                            <span className="font-medium text-gray-800">Editor Picks</span>
                            

                            {

                            filterOption ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>

                            }

                        </Link>

                        {
                            filterOption && <div className='py-4 px-6'>
                            <div className={bestSales ? "flex items-center space-x-2 mb-2 cursor-pointer" : "flex items-center space-x-2 mb-4 cursor-pointer"} onClick={() => setBestSales(!bestSales)}>
                                

                                {
                                    bestSales ? <svg xmlns="http://www.w3.org/2000/svg" className={bestSales ? "h-4 w-4 text-purple-500" : "h-4 w-4"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                }

                                <span className={bestSales ? 'font-medium text-purple-500' : 'font-medium text-gray-900'}>Best sales(105)</span>
                            </div>

                            {
                                bestSales && <div className='pl-6 mb-4'>
                                <div className='mb-1'>
                                    <span>Alone Here</span>
                                </div>
                                <div className='mb-1'>
                                    <span>Alone Here</span>
                                </div>
                                <div className='mb-1'>
                                    <span>Alone Here</span>
                                </div>
                                <div className='mb-1'>
                                    <span>Alone Here</span>
                                </div>
                            </div>
                            }


                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>

                                <span className='font-medium'>Most Comment(105)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>

                                <span className='font-medium'>Most Comment(105)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>

                                <span className='font-medium'>Most Comment(105)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>

                                <span className='font-medium'>Most Comment(105)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>

                                <span className='font-medium'>Most Comment(105)</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>

                                <span className='font-medium'>Most Comment(105)</span>
                            </div>
                        </div>
                        }


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
            <div className='pb-20'>
                <Features />
            </div>
            <Newsletter />
        </Layout>
    )
}
