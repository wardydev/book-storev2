import React from 'react'
import ImageOne from '../../../../assets/images/recommended/img1.jpg';

// css
import './index.css'

export default function RecommendedBook() {
    return (
        <section className="recomended-book px-20">
            <div className="container flex space-x-5">
                <div className="card-1 rounded-lg px-16 py-8">
                    <div className="card-title-1 mb-6">
                        <h3 className="text-3xl my-2 text-gray-900 font-medium">Recomended For You</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src={ImageOne} alt="book-1" />
                </div>
                <div className="card-2 bg-purple-200 rounded-lg px-16 py-8">
                    <div className="card-title-2 mb-6">
                        <h3 className="text-3xl my-2 text-gray-900 font-medium">Popular in 2020</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src={ImageOne} alt="book-2" />
                </div>
            </div>
        </section>
    )
}
