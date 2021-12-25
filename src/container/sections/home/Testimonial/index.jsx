import React from 'react'

// react slider
import Slider from 'react-slick'
// images
import Avatar1 from '../../../../assets/images/avatar/avatar-1.jpg'
import Avatar2 from '../../../../assets/images/avatar/avatar-2.jpg'
import Avatar3 from '../../../../assets/images/avatar/avatar-3.jpg'
import Avatar4 from '../../../../assets/images/avatar/avatar-4.jpg'

export default function Testimonial() {
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          dots: false,
          arrows: false,
          responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
        }

    return (
        <section className="pt-36 overflow-hidden -mb-48 lg:mb-0">
            <div className="container w-full mx-auto">
                <div className="text-center w-full lg:w-2/5 mx-0 lg:mx-auto mb-12">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Flash Shale</h3>
                    <p className="text-gray-600 text-lg lg:text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                    <div className="flex items-center justify-center -space-x-4">
                        <div className="w-16 h-16 rounded-full border-4 border-gray-50 bg-gray-200 overflow-hidden">
                            <img src={Avatar1} alt="avatar-1" />
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-gray-50 bg-gray-200 overflow-hidden">
                            <img src={Avatar2} alt="avatar-2" />
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-gray-50 bg-gray-200 overflow-hidden">
                            <img src={Avatar3} alt="avatar-3" />
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-gray-50 bg-gray-200 overflow-hidden">
                            <img src={Avatar4} alt="avatar-4" />
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-gray-50 bg-purple-500 flex justify-center items-center">
                            <span className="text-gray-50 font-medium">21k+</span>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Slider {...settings}>
                        <div className="py-8 rounded-lg shadow-2xl px-6">
                            <div className="text-center mb-6">
                                <p className="font-medium text-gray-900">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 mb-4 lg:mb-0">
                                    <div className="w-14 h-14 rounded-full bg-gray-500"></div>
                                    <div>
                                        <b className="text-gray-800 font-medium">Haerul wardi</b>
                                        <p className="text-gray-500">Book Lovers</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="py-8 rounded-lg shadow-2xl px-6">
                            <div className="text-center mb-6">
                                <p className="font-medium text-gray-900">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 mb-4 lg:mb-0">
                                    <div className="w-14 h-14 rounded-full bg-gray-500"></div>
                                    <div>
                                        <b className="text-gray-800 font-medium">Haerul wardi</b>
                                        <p className="text-gray-500">Book Lovers</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="py-8 rounded-lg shadow-2xl px-6">
                            <div className="text-center mb-6">
                                <p className="font-medium text-gray-900">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 mb-4 lg:mb-0">
                                    <div className="w-14 h-14 rounded-full bg-gray-500"></div>
                                    <div>
                                        <b className="text-gray-800 font-medium">Haerul wardi</b>
                                        <p className="text-gray-500">Book Lovers</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="py-8 rounded-lg shadow-2xl px-6">
                            <div className="text-center mb-6">
                                <p className="font-medium text-gray-900">Shoping book in Bookoe is very easy. Quick delivery and fast respon. They services is awesome!</p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 mb-4 lg:mb-0">
                                    <div className="w-14 h-14 rounded-full bg-gray-500"></div>
                                    <div>
                                        <b className="text-gray-800 font-medium">Haerul wardi</b>
                                        <p className="text-gray-500">Book Lovers</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
