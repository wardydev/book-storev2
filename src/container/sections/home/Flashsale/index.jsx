import React from 'react'

// css
// image
import FlashOne from '../../../../assets/images/flashsale/img1.jpg'

export default function Flashsale() {
    return (
        <section className="px-20">
            <div className="container">
                {/* title */}
                <div className="text-center w-2/4 mx-auto mb-4">
                    <h3 className="text-4xl my-2 text-gray-900 font-bold">Flash Shale</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam consequuntur corrupti nam unde! Quaerat</p>
                </div>
                {/* countdown */}
                <div className="flex items-center justify-center space-x-6 mb-16">
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
                <div className="grid grid-cols-5 gap-4">
                    <div className="text-center">
                        <img src={FlashOne} alt="book-1" className="mx-auto rounded-lg mb-4" width="180" />
                        <div className="text-center mb-4">
                            <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                            <p className="text-gray-600">THRILLERR</p>
                        </div>
                        <h3 className="text-purple-500 text-center font-medium text-2xl">$54.78</h3>
                    </div>
                    <div className="text-center">
                        <img src={FlashOne} alt="book-1" className="mx-auto rounded-lg mb-4" width="180" />
                        <div className="text-center mb-4">
                            <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                            <p className="text-gray-600">THRILLERR</p>
                        </div>
                        <h3 className="text-purple-500 text-center font-medium text-2xl">$54.78</h3>
                    </div>
                    <div className="text-center">
                        <img src={FlashOne} alt="book-1" className="mx-auto rounded-lg mb-4" width="180" />
                        <div className="text-center mb-4">
                            <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                            <p className="text-gray-600">THRILLERR</p>
                        </div>
                        <h3 className="text-purple-500 text-center font-medium text-2xl">$54.78</h3>
                    </div>
                    <div className="text-center">
                        <img src={FlashOne} alt="book-1" className="mx-auto rounded-lg mb-4" width="180" />
                        <div className="text-center mb-4">
                            <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                            <p className="text-gray-600">THRILLERR</p>
                        </div>
                        <h3 className="text-purple-500 text-center font-medium text-2xl">$54.78</h3>
                    </div>
                    <div className="text-center">
                        <img src={FlashOne} alt="book-1" className="mx-auto rounded-lg mb-4" width="180" />
                        <div className="text-center mb-4">
                            <h4 className="text-gray-800 font-medium text-2xl">Second</h4>
                            <p className="text-gray-600">THRILLERR</p>
                        </div>
                        <h3 className="text-purple-500 text-center font-medium text-2xl">$54.78</h3>
                    </div>
                </div>

            </div>
        </section>
    )
}
