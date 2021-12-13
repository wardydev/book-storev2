import React from 'react'

// img
import BookLg from '../../../../assets/images/dummy-book/book-lg.jpg'

export default function DetailsBook() {
    return (
        <section className="px-6 lg:px-20 pt-8">
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 items-center">
                {/* img */}
                <img src={BookLg} alt="book-lg" className="rounded-lg w-w-3/5 lg:w-4/5 mb-10 lg:mb-0" />
                {/* detail */}
                <div className="w-full">
                    <h2 className="text-gray-900 font-bold text-3xl mb-4">All Good News</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
                        <div className="flex space-x-6 lg:space-x-8 items-center mb-6 lg:mb-0">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <span className="font-bold text-gray-800">4.0</span>
                            <div className="flex space-x-4">
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-800 text-xs">235 Reviews</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>
                                    <span className="text-gray-800 text-xs">235 Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 lg:pace-x-4">
                            <button className="bg-blue-600 rounded-lg text-gray-100 py-1 px-4">Facebook</button>
                            <button className="bg-blue-600 rounded-lg text-gray-100 py-1 px-4">Twitter</button>
                            <button className="bg-blue-600 rounded-lg text-gray-100 py-1 px-4">Whatsapp</button>
                            <button className="bg-blue-600 rounded-lg text-gray-100 py-1 px-4">Email</button>
                        </div>
                    </div>
                    <div className="mb-3 mt-6">
                        <p className="text-gray-600 text-lg lg:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis fugit illo delectus. Adipisci dolore nemo quam debitis sit amet, consequatur qui laborum. Omnis dolorum similique perspiciatis rem? Fugit, saepe. Facilis quae tempora ipsa maxime hic dolore veniam placeat, alias totam id aliquid obcaecati sunt! Ipsam quia eaque explicabo ab.</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg lg:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta omnis fugit illo delectus. Adipisci dolore nemo quam debitis sit amet, consequatur qui laborum. Omnis dolorum similique perspiciatis rem? Fugit, saepe. Facilis quae tempora ipsa maxime hic dolore veniam placeat, alias totam id aliquid obcaecati sunt! Ipsam quia eaque explicabo ab.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between items-start lg:items-center mt-10 mb-12 lg:mb-6">
                        <div className="flex space-x-4 lg:space-x-14 items-end lg:items-stretch">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center space-x-0 lg:space-x-4">
                                <div className="h-10 w-10 bg-gray-400 rounded-lg mb-4 lg:mb-0"></div>
                                <div className="flex flex-col">
                                    <small className="text-gray-400">Written By</small>
                                    <b className="text-gray-800">Kevin smilley</b>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <small className="text-gray-400">Publisher</small>
                                <b className="text-gray-800">Kevin smilley</b>
                            </div>
                            <div className="flex flex-col">
                                <small className="text-gray-400">Year</small>
                                <b className="text-gray-800">2019</b>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 w-full lg:w-auto">
                            <button className="py-2 px-6 bg-purple-100 w-full lg:w-auto hover:bg-purple-200 text-purple-600 font-bold rounded-lg">FREE SHIPING</button>
                            <button className="py-2 px-6 bg-green-100 w-full lg:w-auto hover:bg-green-200 text-green-600 font-bold rounded-lg">IN STOCK</button>
                        </div>
                    </div>
                    <hr className="border-dashed border-t-2 border-gray-400" />
                    <div className="flex flex-col lg:flex-row w-full lg:w-auto justify-between items-start lg:items-center mt-12 lg:mt-6">
                        <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:space-x-6">
                            <h2 className="text-gray-900 font-bold text-3xl">$15,63</h2>
                            <span className="text-gray-300">$16,99</span>
                            <span className="bg-yellow-500 px-3 text-gray-50 rounded-full">2%</span>
                        </div>
                        <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start space-x-5">
                            <div className="py-2 px-3 border rounded-lg border-gray-200 flex items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>

                                <span className="font-bold px-8">1</span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <button className="w-full lg:w-auto py-2 px-6 bg-purple-500 hover:bg-purple-600 text-gray-50 rounded-lg font-medium">Add to chart</button>
                            <div className="p-2 rounded-lg border border-gray-200 hidden lg:block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
