import React from 'react'

// img
import Logo from '../../../assets/logo/logo.svg'
import MapLocation from '../../../assets/images/footer/img1.JPG'

export default function Footer() {
    return (
        <footer className="pt-10">
            <div className="grid grid-cols-4 gap-4 px-20 mb-8 ">
                <div>
                    <div className="mb-4">
                        <img src={Logo} alt="logo" className="mb-6" />
                        <p className="text-gray-600">Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div>
                        <h5 className="text-gray-800 font-medium">Follow us</h5>

                        <div className="flex items-center space-x-4 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-800 font-bold mb-4">Books Categories</h4>
                    <div className="flex items-start space-x-12">
                        <div className="flex flex-col opacity-80 space-y-2">
                            <p>Action</p>
                            <p>Adventures</p>
                            <p>Comedy</p>
                            <p>Crime</p>
                            <p>Drama</p>
                            <p>Fantasy</p>
                            <p>Horror</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="opacity-80">Law</p>
                            <p className="opacity-80">Mystery</p>
                            <p className="opacity-80">Professional</p>
                            <p className="opacity-80">Roamnce</p>
                            <p className="opacity-80">Tv Series</p>
                            <p className="font-medium text-purple-500">View more</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-800 font-bold mb-4">Quick Links</h4>
                    <div className="flex items-start space-x-12">
                        <div className="flex flex-col opacity-60 space-y-2">
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Products</p>
                            <p>Login Sign Up</p>
                            <p>FAQ</p>
                            <p>Shipment</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-800 font-bold mb-4">Our Store</h4>
                    <div className="flex items-start">
                        <div className="h-28 w-full bg-gray-300 rounded-lg overflow-hidden">
                            <img src={MapLocation} alt="map location" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>

                            <span className="text-gray-500">832  Thompson Drive</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>

                            <span className="text-gray-500">+123 345123 556</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                            </svg>

                            <span className="text-gray-500">support@bookoe.id</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full" />

            <div className="flex justify-between items-center px-20 py-6">
                <div className="text-gray-800">
                    <span>Bookoe Book Store Website</span>
                    <span>© 2020 All Rights Reserved</span>
                </div>
                <span>Made with ♥ by Peterdraw</span>
            </div>
        </footer>
    )
}
