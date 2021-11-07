import React from 'react'
import './index.css'

export default function Hero() {
    return (
        <section className="px-20">
            <div className="container flex space-x-4">
                <div className="hero-special grid-1 w-3/4 min-h-20 bg-purple-100 rounded-lg py-14 px-12">
                    <div className="hero-title text-gray-800 w-3/5 pb-8">
                        <span className="text-purple-500">BACK TO SCHOOL</span>
                        <h1 className="text-5xl font-bold mt-4">Special 50% Off</h1>
                        <h3 className="text-3xl mb-4">for our student community</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>

                        <div className="flex space-x-4 items-center mt-8">
                            <button className="flex items-center bg-purple-500 hover:bg-purple-600 rounded-lg py-3 px-4 text-gray-50 filter drop-shadow-xl">
                                <span className="mr-3">Get the deal</span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="py-3 px-4 border-2 border-gray-600 rounded-lg hover:bg-purple-500 hover:border-0 hover:text-gray-50">See Other Promos</button>
                        </div>
                    </div>
                </div>
                <div className="grid-1 w-1/4 h-20 bg-red-500 rounded-lg">grid 2</div>
            </div>
        </section>
    )
}
