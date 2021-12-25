import React from 'react'
import { Link } from 'react-router-dom'

// images
import BookSm from '../../../../assets/images/dummy-book/book-sm.jpg'


// css
import './index.css'

export default function RecommendedBook() {
    return (
        <section className="recomended-book px-6 lg:px-20">
            <div className="container flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
                <div className="card-1 rounded-lg px-5 lg:px-16 py-8">
                    <div className="card-title-1 mb-6">
                        <h3 className="text-3xl my-2 text-gray-900 font-bold">Recomended For You</h3>
                        <p className="text-gray-600 text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="card-image flex flex-wrap lg:flex-nowrap items-center space-x-0 lg:space-x-2 ">
                        <Link to="/detail-book">
                            <img src={BookSm} className='rounded-sm' alt="book-sm" />
                        </Link>
                        <Link to="/detail-book">
                            <img src={BookSm} className='rounded-sm' alt="book-sm" />
                        </Link>
                        <Link to="/detail-book">
                            <img src={BookSm} className='rounded-sm' alt="book-sm" />
                        </Link>
                    </div>
                </div>
                <div className="card-2 bg-purple-200 rounded-lg px-5 lg:px-16 py-8">
                    <div className="card-title-2 mb-6">
                        <h3 className="text-3xl my-2 text-gray-900 font-bold">Popular In 2021</h3>
                        <p className="text-gray-600 text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="card-image flex flex-wrap lg:flex-nowrap items-center space-x-0 lg:space-x-2">
                        <Link to="/detail-book">
                            <img src={BookSm} className='rounded-sm' alt="book-sm" />
                        </Link>
                        <Link to="/detail-book">
                            <img src={BookSm} className='rounded-sm' alt="book-sm" />
                        </Link>
                        <Link to="/detail-book">
                            <img src={BookSm} className='rounded-sm' alt="book-sm" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
