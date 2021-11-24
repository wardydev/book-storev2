import { fireEvent } from '@testing-library/dom'
import React from 'react'

// img
import BookOne from '../../../assets/images/bookOnSale/img1.jpg'
import BookTwo from '../../../assets/images/bookOnSale/img2.jpg'
import BookThree from '../../../assets/images/bookOnSale/img3.jpg'
import BookFour from '../../../assets/images/bookOnSale/img4.jpg'
import BookFive from '../../../assets/images/bookOnSale/img5.jpg'
import BookSix from '../../../assets/images/bookOnSale/img6.jpg'

export default function BookOnSale() {
    return (
        <section className="px-20 py-28">
            <div className="container">
                <div className="mb-8">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Book On Sale</h3>
                </div>
                <div className="grid grid-cols-6 gap-8">
                    <div>
                        {/* img */}
                        <img src={BookOne} alt="book-1" className="w-full rounded-2xl" />
                        {/* title */}
                        <div className="mt-4 mb-4">
                            <h4 className="text-gray-900 font-medium">The Missadventure of..</h4>
                            <p className="text-gray-500">ADVANTURE, SURVIVAL</p>
                        </div>
                        {/* flex rate and price */}
                        <div className="flex justify-between items-center">
                            <span className="text-yellow-500">4.6</span>
                            <span className="font-medium text-2xl">$45.4</span>
                        </div>
                    </div>
                    <div>
                        {/* img */}
                        <img src={BookTwo} alt="book-1" className="w-full rounded-2xl" />
                        {/* title */}
                        <div className="mt-4 mb-4">
                            <h4 className="text-gray-900 font-medium">The Missadventure of..</h4>
                            <p className="text-gray-500">ADVANTURE, SURVIVAL</p>
                        </div>
                        {/* flex rate and price */}
                        <div className="flex justify-between items-center">
                            <span className="text-yellow-500">4.6</span>
                            <span className="font-medium text-2xl">$45.4</span>
                        </div>
                    </div>
                    <div>
                        {/* img */}
                        <img src={BookFive} alt="book-1" className="w-full rounded-2xl" />
                        {/* title */}
                        <div className="mt-4 mb-4">
                            <h4 className="text-gray-900 font-medium">The Missadventure of..</h4>
                            <p className="text-gray-500">ADVANTURE, SURVIVAL</p>
                        </div>
                        {/* flex rate and price */}
                        <div className="flex justify-between items-center">
                            <span className="text-yellow-500">4.6</span>
                            <span className="font-medium text-2xl">$45.4</span>
                        </div>
                    </div>
                    <div>
                        {/* img */}
                        <img src={BookFour} alt="book-1" className="w-full rounded-2xl" />
                        {/* title */}
                        <div className="mt-4 mb-4">
                            <h4 className="text-gray-900 font-medium">The Missadventure of..</h4>
                            <p className="text-gray-500">ADVANTURE, SURVIVAL</p>
                        </div>
                        {/* flex rate and price */}
                        <div className="flex justify-between items-center">
                            <span className="text-yellow-500">4.6</span>
                            <span className="font-medium text-2xl">$45.4</span>
                        </div>
                    </div>
                    <div>
                        {/* img */}
                        <img src={BookFive} alt="book-1" className="w-full rounded-2xl" />
                        {/* title */}
                        <div className="mt-4 mb-4">
                            <h4 className="text-gray-900 font-medium">The Missadventure of..</h4>
                            <p className="text-gray-500">ADVANTURE, SURVIVAL</p>
                        </div>
                        {/* flex rate and price */}
                        <div className="flex justify-between items-center">
                            <span className="text-yellow-500">4.6</span>
                            <span className="font-medium text-2xl">$45.4</span>
                        </div>
                    </div>
                    <div>
                        {/* img */}
                        <img src={BookSix} alt="book-1" className="w-full rounded-2xl" />
                        {/* title */}
                        <div className="mt-4 mb-4">
                            <h4 className="text-gray-900 font-medium">The Missadventure of..</h4>
                            <p className="text-gray-500">ADVANTURE, SURVIVAL</p>
                        </div>
                        {/* flex rate and price */}
                        <div className="flex justify-between items-center">
                            <span className="text-yellow-500">4.6</span>
                            <span className="font-medium text-2xl">$45.4</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
