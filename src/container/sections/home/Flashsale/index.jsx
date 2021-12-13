import React from 'react'

// image
import BookLg from '../../../../assets/images/dummy-book/book-lg.jpg'

export default function Flashsale() {
    return (
        <section className="px-6 lg:px-20">
            <div className="container">
                {/* title */}
                <div className="text-left lg:text-center w-full lg:w-2/4 mx-auto mb-4">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Flash Shale</h3>
                    <p className="text-gray-600 text-lg lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                </div>
                {/* countdown */}
                <div className="flex items-center justify-between lg:justify-center space-x-6 mb-16">
                    <div className="text-center">
                        <h3 className="text-3xl my-2 text-red-500 font-bold">02</h3>
                        <p className="text-gray-600 font-medium">Day</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl my-2 text-red-500 font-bold">05</h3>
                        <p className="text-gray-600 font-medium">Hours</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl my-2 text-red-500 font-bold">42</h3>
                        <p className="text-gray-600 font-medium">Minutes</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl my-2 text-red-500 font-bold">19</h3>
                        <p className="text-gray-600 font-medium">Seconds</p>
                    </div>
                </div>
                {/* book card */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-0 gap-y-8 lg:gap-y-0 lg:gap-x-4">
                    <div className="text-center w-9/12 lg:w-4/5 mx-auto">
                        <img src={BookLg} alt="book-lg" className="mx-auto rounded-lg mb-4" />
                        <div className='flex items-center justify-between'>
                            <div className="text-center mb-4">
                                <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                                <p className="text-gray-600">THRILLERR</p>
                            </div>
                            <div className="flex justify-center items-center space-x-2">
                                <h4 className="text-purple-600 text-2xl font-medium rounded-lg">$18,78</h4>
                                <span className="text-gray-400 line-through">$25</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-9/12 lg:w-4/5 mx-auto">
                        <img src={BookLg} alt="book-lg" className="mx-auto rounded-lg mb-4" />
                        <div className='flex items-center justify-between'>
                            <div className="text-center mb-4">
                                <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                                <p className="text-gray-600">THRILLERR</p>
                            </div>
                            <div className="flex justify-center items-center space-x-2">
                                <h4 className="text-purple-600 text-2xl font-medium rounded-lg">$18,78</h4>
                                <span className="text-gray-400 line-through">$25</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-9/12 lg:w-4/5 mx-auto">
                        <img src={BookLg} alt="book-lg" className="mx-auto rounded-lg mb-4" />
                        <div className='flex items-center justify-between'>
                            <div className="text-center mb-4">
                                <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                                <p className="text-gray-600">THRILLERR</p>
                            </div>
                            <div className="flex justify-center items-center space-x-2">
                                <h4 className="text-purple-600 text-2xl font-medium rounded-lg">$18,78</h4>
                                <span className="text-gray-400 line-through">$25</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-9/12 lg:w-4/5 mx-auto">
                        <img src={BookLg} alt="book-lg" className="mx-auto rounded-lg mb-4" />
                        <div className='flex items-center justify-between'>
                            <div className="text-center mb-4">
                                <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                                <p className="text-gray-600">THRILLERR</p>
                            </div>
                            <div className="flex justify-center items-center space-x-2">
                                <h4 className="text-purple-600 text-2xl font-medium rounded-lg">$18,78</h4>
                                <span className="text-gray-400 line-through">$25</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-9/12 lg:w-4/5 mx-auto">
                        <img src={BookLg} alt="book-lg" className="mx-auto rounded-lg mb-4" />
                        <div className='flex items-center justify-between'>
                            <div className="text-center mb-4">
                                <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                                <p className="text-gray-600">THRILLERR</p>
                            </div>
                            <div className="flex justify-center items-center space-x-2">
                                <h4 className="text-purple-600 text-2xl font-medium rounded-lg">$18,78</h4>
                                <span className="text-gray-400 line-through">$25</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
