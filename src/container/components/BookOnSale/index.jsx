import React from 'react'

// react slick
import Slider from 'react-slick'
import './index.css'

// img
import BookOne from '../../../assets/images/bookOnSale/img1.jpg'
import BookTwo from '../../../assets/images/bookOnSale/img2.jpg'
import BookFour from '../../../assets/images/bookOnSale/img4.jpg'
import BookFive from '../../../assets/images/bookOnSale/img5.jpg'
import BookSix from '../../../assets/images/bookOnSale/img6.jpg'

export default function BookOnSale() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
              <ul style={{ margin: "-420px" }}> {dots} </ul>
            </div>
          )
      }


    return (
        <section className="px-20 pt-28 book-sale -mb-96">
            <div className="container">
                <div className="mb-12">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Book On Sale</h3>
                </div>

                <div className="w-full">
                    <Slider {...settings}>
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
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-500">4.6</span>
                                </div>
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
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-500">4.6</span>
                                </div>
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
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-500">4.6</span>
                                </div>
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
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-500">4.6</span>
                                </div>
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
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-500">4.6</span>
                                </div>
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
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-yellow-500">4.6</span>
                                </div>
                                <span className="font-medium text-2xl">$45.4</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
