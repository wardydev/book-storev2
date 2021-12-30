import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

// img
import BookLandscape from '../../../../assets/images/dummy-book/book-landscape.jpg'
import { actionCreator } from '../../../../redux'
// css

export default function SpecialOffers() {
    const dispatch = useDispatch()
    const {changeCartBool, handleCartCount} = bindActionCreators(actionCreator, dispatch)

    const handleCart = () => {
        changeCartBool(true)
        handleCartCount(1)
    }

    return (
        <section className="special-offers px-6 lg:px-20 py-28">
            <div className="container">
                <div className="text-left lg:text-center w-full lg:w-2/4 mx-auto mb-16">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Special Offers</h3>
                    <p className="text-gray-600 text-lg lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                </div>

                <div className="grid grid-col-1 lg:grid-cols-3 gap-8">
                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                        <Link to="/detail-book" className="h-56 bg-red-900 rounded-lg overflow-hidden">
                            <img src={BookLandscape} className="w-full rounded-lg" alt="book-landscape" />
                        </Link>

                        <div className="px-4 py-5">
                            <h4 className="text-gray-900 text-2xl font-medium mb-4">The Raven Boys</h4>
                            <div className="flex space-x-2 items-center mb-4">
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">BIOGRAPHY</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">THRILLER</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">HORROR</button>
                            </div>
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <b className="mb-4">Maggie Stiefvater</b>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={handleCart} className="bg-purple-500 hover:bg-purple-600 text-gray-50 py-2 px-4 rounded-lg flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Add To Cart</span>
                                </button>
                                <div className="flex items-center space-x-2">
                                    <h4 className="text-gray-900 text-2xl font-medium rounded-lg text-purple-600">$18,78</h4>
                                    <span className="text-gray-400 line-through">$25</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                        <Link to="/detail-book" className="h-56 bg-red-900 rounded-lg overflow-hidden">
                            <img src={BookLandscape} className="w-full rounded-lg" alt="book-landscape" />
                        </Link>

                        <div className="px-4 py-5">
                            <h4 className="text-gray-900 text-2xl font-medium mb-4">The Raven Boys</h4>
                            <div className="flex space-x-2 items-center mb-4">
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">BIOGRAPHY</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">THRILLER</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">HORROR</button>
                            </div>
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <b className="mb-4">Maggie Stiefvater</b>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={handleCart} className="bg-purple-500 hover:bg-purple-600 text-gray-50 py-2 px-4 rounded-lg flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Add To Chart</span>
                                </button>
                                <div className="flex items-center space-x-2">
                                    <h4 className="text-gray-900 text-2xl font-medium rounded-lg text-purple-600">$18,78</h4>
                                    <span className="text-gray-400 line-through">$25</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                        <Link to="/detail-book" className="h-56 bg-red-900 rounded-lg overflow-hidden">
                            <img src={BookLandscape} className="w-full rounded-lg" alt="book-landscape" />
                        </Link>

                        <div className="px-4 py-5">
                            <h4 className="text-gray-900 text-2xl font-medium mb-4">The Raven Boys</h4>
                            <div className="flex space-x-2 items-center mb-4">
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">BIOGRAPHY</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">THRILLER</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full cursor-default">HORROR</button>
                            </div>
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <b className="mb-4">Maggie Stiefvater</b>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={handleCart} className="bg-purple-500 hover:bg-purple-600 text-gray-50 py-2 px-4 rounded-lg flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Add To Chart</span>
                                </button>
                                <div className="flex items-center space-x-2">
                                    <h4 className="text-gray-900 text-2xl font-medium rounded-lg text-purple-600">$18,78</h4>
                                    <span className="text-gray-400 line-through">$25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
