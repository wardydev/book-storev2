import React from 'react'
// img
import BookOne from '../../../../assets/images/offers/img3.jpg'

export default function Latenews() {
    return (
        <section className="px-6 lg:px-20 py-12">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end mb-16 lg:mb-12">
                    <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                        <h3 className="text-4xl my-2 text-gray-900 font-bold">Lates News</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 font-medium py-2 px-6 text-gray-50 rounded-lg">View More</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 gap-y-6 lg:gap-y-0 lg:gap-x-8">
                    <div>
                        <div className="h-48 bg-red-500 rounded-lg overflow-hidden mb-6">
                            <img src={BookOne} alt="book-1" />
                        </div>
                        <div className="mb-4">
                            <h5 className="font-medium text-gray-800">Why reading is important for our children?</h5>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... <br /> <span className="text-purple-500 hover:text-purple-600">Continue Reading</span> </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 bg-purple-500 rounded-full"></div>
                            <div>
                                <b className="text-gray-800">Haerul wardy</b>
                                <p className="text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-48 bg-red-500 rounded-lg overflow-hidden mb-6">
                            <img src={BookOne} alt="book-1" />
                        </div>
                        <div className="mb-4">
                            <h5 className="font-medium text-gray-800">Why reading is important for our children?</h5>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... <br /> <span className="text-purple-500 hover:text-purple-600">Continue Reading</span> </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 bg-purple-500 rounded-full"></div>
                            <div>
                                <b className="text-gray-800">Haerul wardy</b>
                                <p className="text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-48 bg-red-500 rounded-lg overflow-hidden mb-6">
                            <img src={BookOne} alt="book-1" />
                        </div>
                        <div className="mb-4">
                            <h5 className="font-medium text-gray-800">Why reading is important for our children?</h5>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... <br /> <span className="text-purple-500 hover:text-purple-600">Continue Reading</span> </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 bg-purple-500 rounded-full"></div>
                            <div>
                                <b className="text-gray-800">Haerul wardy</b>
                                <p className="text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-48 bg-red-500 rounded-lg overflow-hidden mb-6">
                            <img src={BookOne} alt="book-1" />
                        </div>
                        <div className="mb-4">
                            <h5 className="font-medium text-gray-800">Why reading is important for our children?</h5>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore... <br /> <span className="text-purple-500 hover:text-purple-600">Continue Reading</span> </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-10 w-10 bg-purple-500 rounded-full"></div>
                            <div>
                                <b className="text-gray-800">Haerul wardy</b>
                                <p className="text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
