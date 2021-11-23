import React from 'react'

// css
import './index.css'
// img
import BookOne from '../../../../assets/images/featured/img1.jpg'

export default function FeaturedBook() {
    return (
        <section className="featured px-20 py-12 bg-purple-100">
            <div className="container grid grid-cols-2 items-center gap-8 relative z-10">
                <div>
                    {/* titile */}
                    <div className="mb-4 w-2/3">
                        <h3 className="text-4xl my-2 text-gray-900 font-bold">Featured Book</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                    </div>

                    {/* card */}
                    <div className="px-6 py-8 rounded-lg bg-gray-50 flex space-x-6 shadow-xl">
                        <img src={BookOne} alt="book-1" className="rounded-lg" width="240" />

                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>

                                <div>
                                    <h4 className="text-gray-800 font-medium text-2xl">Battle Drive</h4>
                                    <p className="text-gray-500">Sport, Thriller</p>
                                </div>

                            </div>
                            <div className="mb-4">
                                <p className="font-medium text-gray-800 mb-2">Synopsis</p>
                                <p className="text-gray-500">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure exercitationem perferendis dolor odio quisquam quasi, quo deserunt quae eos!"</p>
                            </div>
                            <div className="flex space-x-4 mb-6">
                                <div>
                                    <p className="text-gray-500">Written By</p>
                                    <b>Kevin Smiley</b>
                                </div>
                                <div>
                                    <p className="text-gray-500">Year</p>
                                    <b>2019</b>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span>$487.98</span>
                                <button className="rounded-lg bg-purple-500 hover:bg-purple-600 text-gray-50 py-2 px-4">Add To Chart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 py-4">
                    <img src={BookOne} alt="book-1" className="rounded-lg" />
                    <img src={BookOne} alt="book-1" className="rounded-lg" />
                    <img src={BookOne} alt="book-1" className="rounded-lg" />
                    <img src={BookOne} alt="book-1" className="rounded-lg" />
                    <img src={BookOne} alt="book-1" className="rounded-lg" />
                    <img src={BookOne} alt="book-1" className="rounded-lg" />
                </div>
            </div>
        </section>
    )
}
