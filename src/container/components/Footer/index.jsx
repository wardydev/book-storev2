import React from 'react'

// img
import Logo from '../../../assets/logo/logo.svg'

export default function Footer() {
    return (
        <footer className="pt-36">
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
                    <div className="flex items-start space-x-12">
                        <div className="h-28 w-full bg-gray-300 rounded-lg"></div>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center space-x-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 mb-2 w-12 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>

                            <span className="text-gray-500">832  Thompson Drive</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 mb-2 w-12 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>

                            <span className="text-gray-500">+123 345123 556</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 mb-2 w-12 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>

                            <span className="text-gray-500">support@bookoe.id</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-full" />

            <div className="flex justify-between items-center px-20 py-6">
                <div className="text-gray-800">
                    <span>Bookoe Book Store Website  -   </span>
                    <span>© 2020 All Rights Reserved</span>
                </div>
                <span>Made with ♥ by Peterdraw</span>
            </div>
        </footer>
    )
}
