import React from 'react'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// assets
import BookSm from '../../../../assets/images/dummy-book/book-sm.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../../../redux';
import { useSelector } from 'react-redux';

// slider

export default function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
      };
      const dispatch = useDispatch()
      const {handleShoppingSummaryStepper,
        handleCheckoutStepper,
        handlePaymentsStepper,
        handleFinishedStepper
        }= bindActionCreators(actionCreator, dispatch)

      const handleResetCheckout = () => {
        handleShoppingSummaryStepper(true)
        handleCheckoutStepper(false)
        handlePaymentsStepper(false)
        handleFinishedStepper(false)

      }

    return (
        <section className="px-6 lg:px-20 mt-32">
            <div className="container flex flex-col lg:flex-row space-x-0 lg:space-x-4">
                <div className="hero-special mb-10 lg:mb-0 w-full lg:w-3/4 min-h-20 bg-purple-100 rounded-lg py-20 px-4 lg:px-16">
                    <div className="hero-title w-full lg:w-3/5">
                        <span className="text-purple-500">BACK TO SCHOOL</span>
                        <h1 className="text-5xl lg:text-6xl font-bold mt-4 text-gray-900">Special 50% Off</h1>
                        <h3 className="text-2xl my-4 text-gray-700">for our student community</h3>
                        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        
                        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 items-center justify-center lg:justify-start mt-8">
                            <button className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 rounded-lg py-3 px-4 text-gray-50 filter drop-shadow-xl w-full lg:w-auto">
                                <span className="mr-3 font-medium">Get the deal</span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <Link to="/books" className="py-3 px-4 border border-purple-600 rounded-lg text-purple-600 hover:text-purple-700 w-full lg:w-auto font-medium">See Other Promos</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 bg-gray-900 rounded-lg flex flex-col justify-center items-center text-center py-8 px-16 lg:px-12">
                    <div >
                        <h3 className="text-4xl text-gray-50">Best Seller</h3>
                        <p className="text-gray-300 text-lg">Based sales this week</p>
                    </div>

                    <div className="w-full text-center h-64">
                        <Slider {...settings}>
                            <Link to="/detail-book">
                                <div className="text-center rounded-lg overflow-hidden">
                                    <img src={BookSm} alt="book-sm" className="rounded-lg py-4" />
                                </div>
                            </Link>
                            <Link to="/detail-book">
                                <div className="text-center rounded-lg overflow-hidden">
                                    <img src={BookSm} alt="book-sm" className="rounded-lg py-4" />
                                </div>
                            </Link>
                        </Slider>
                    </div>


                    <div className='w-full lg:w-auto'>
                        <h4 className="font-medium text-lg text-gray-100">The Raven Boys</h4>
                        <p className="text-sm text-gray-300">Scholastic</p>
                        <Link to="/checkout" onClick={handleResetCheckout} className="bg-gray-50 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg mt-6 flex items-center justify-center space-x-2 w-full cursor-pointer relative z-10">
                                <span className="text-gray-400 line-through">$25</span>
                                <h4 className="text-gray-900 text-2xl font-bold rounded-lg">$18,78</h4>
                        </Link>
                    </div>
                </div> 
            </div>
        </section>
    )
}

