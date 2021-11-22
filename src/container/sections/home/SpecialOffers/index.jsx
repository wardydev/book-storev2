import React from 'react'

// img
import BookOne from '../../../../assets/images/offers/img1.jpg';
// css

export default function SpecialOffers() {
    return (
        <section className="special-offers px-20 py-28">
            <div className="container">
                <div className="text-center w-2/4 mx-auto mb-16">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Special Offers</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                        <div className="h-56 bg-red-900 rounded-lg overflow-hidden">
                            <img src={BookOne} alt="book-1" />
                        </div>

                        <div className="px-4 py-5">
                            <h4 className="text-gray-900 text-2xl font-medium mb-4">SECONDS [Part 1]</h4>
                            <div className="flex space-x-2 items-center mb-4">
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">BIOGRAPHY</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">THRILLER</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">HORROR</button>
                            </div>
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <b className="mb-4">Kevin Smiley</b>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-purple-600 hover:bg-purple-700 text-gray-50 py-2 px-4 rounded-lg">Add To Chart</button>
                                <button className="text-gray-900 text-2xl font-medium py-2 px-4 rounded-lg">$18,78</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                        <div className="h-56 bg-red-900 rounded-lg overflow-hidden">
                            <img src={BookOne} alt="book-1" />
                        </div>

                        <div className="px-4 py-5">
                            <h4 className="text-gray-900 text-2xl font-medium mb-4">SECONDS [Part 1]</h4>
                            <div className="flex space-x-2 items-center mb-4">
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">BIOGRAPHY</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">THRILLER</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">HORROR</button>
                            </div>
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <b className="mb-4">Kevin Smiley</b>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-purple-600 hover:bg-purple-700 text-gray-50 py-2 px-4 rounded-lg">Add To Chart</button>
                                <button className="text-gray-900 text-2xl font-medium py-2 px-4 rounded-lg">$18,78</button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg">
                        <div className="h-56 bg-red-900 rounded-lg overflow-hidden">
                            <img src={BookOne} alt="book-1" />
                        </div>

                        <div className="px-4 py-5">
                            <h4 className="text-gray-900 text-2xl font-medium mb-4">SECONDS [Part 1]</h4>
                            <div className="flex space-x-2 items-center mb-4">
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">BIOGRAPHY</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">THRILLER</button>
                                <button className="bg-purple-100 text-purple-600 px-4 py-1 text-1xl rounded-full">HORROR</button>
                            </div>
                            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <b className="mb-4">Kevin Smiley</b>
                            <div className="flex justify-between items-center mt-4">
                                <button className="bg-purple-600 hover:bg-purple-700 text-gray-50 py-2 px-4 rounded-lg">Add To Chart</button>
                                <button className="text-gray-900 text-2xl font-medium py-2 px-4 rounded-lg">$18,78</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
