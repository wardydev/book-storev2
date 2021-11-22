import React from 'react'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// assets
import Placeholder from '../../../../assets/images/placeholder.png'
// slider

export default function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <section className="px-20">
            <div className="container flex space-x-4">
                <div className="hero-special grid-1 w-3/4 min-h-20 bg-purple-100 rounded-lg py-20 px-16">
                    <div className="hero-title text-gray-800 w-3/5">
                        <span className="text-purple-500">BACK TO SCHOOL</span>
                        <h1 className="text-6xl font-bold mt-4">Special 50% Off</h1>
                        <h3 className="text-3xl my-4 text-gray-600">for our student community</h3>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        
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
                <div className="w-1/4 min-h-20 bg-gray-900 rounded-lg flex flex-col justify-center items-center text-center py-8 px-12">
                    <div className="text-gray-50">
                        <h3 className="text-4xl">Best Seller</h3>
                        <p className="text-gray-400">Based sales this week</p>
                    </div>

                    <div className="w-full text-center">
                        <Slider {...settings}>
                            <div className="text-center rounded-lg overflow-hidden px-4">
                                <img src={Placeholder} alt="placeholder" className="rounded-lg py-4 w-full" />
                            </div>
                            <div className="text-center rounded-lg overflow-hidden px-4">
                                <img src={Placeholder} alt="placeholder" className="rounded-lg py-4 w-full" />
                            </div>
                        </Slider>
                    </div>


                    <div className="text-gray-50">
                        <h4 className="font-medium text-lg">Pushing clouds</h4>
                        <p className="text-xs text-gray-400">ADVANTURE, SCIENCE, COMEDY</p>
                        <button className="bg-gray-50 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-lg mt-6">
                            <span>USD 45.25</span>
                        </button>
                    </div>
                </div> 
            </div>
        </section>
    )
}
