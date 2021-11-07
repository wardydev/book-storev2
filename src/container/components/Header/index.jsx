import React from 'react'

// assets
import Logo from '../../../assets/logo/logo.svg'

// react router
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="px-20 py-8">
            <div className="container-header flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="book logo" width="130" />
                </Link>
                <div className="border-2 border-purple-200 rounded-lg flex items-center w-3/5">
                    <div className="flex items-center space-x-2 border-r-2 border-purple-200 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>

                        <div className="flex items-center ml-2 text-purple-500 cursor-pointer">
                            <span>Menus</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full">
                        <input type="text" className="focus:outline-none py-2 px-4 w-full" placeholder="Search over 30 million book titles" />
                    </div>
                    <div className="px-4 border-l-2 border-purple-200 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <div className="signs flex items-center space-x-6">
                    <button className="py-2 px-3 bg-purple-100 text-purple-500 rounded-lg hover:bg-purple-200">Log in</button>
                    <button className="flex items-center justify-center py-2 px-3 bg-purple-500 hover:bg-purple-600 text-gray-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>

                    <span>Sign Out</span>
                    </button>
                </div>
            </div>
        </header>
    )
}
