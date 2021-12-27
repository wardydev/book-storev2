import React from 'react'

// assets
import Logo from '../../../assets/logo/logo.svg'

// react router
import { Link } from 'react-router-dom'
import LoginModal from '../LoginModal'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../redux'

export default function Header() {
    const login = useSelector(state => state.login)
    const {isLogin, greeting, changeLogin} = login
    const dispatch = useDispatch()
    const {handleLogin, handleGreeting, handleCartCount} = bindActionCreators(actionCreator, dispatch)
    const username = localStorage.getItem('isLogin')

    const cart = useSelector(state => state.cart)
    const {isCart, cartCount} = cart
    
    const handleFakeLogin = (e) => {
        e.preventDefault()
        handleLogin(!isLogin)
    }

    setTimeout(() => {
        handleGreeting(false)
    }, 10000)

    const handleaddChart = () => {
        handleCartCount(1)
    }

    return (
        <>
            {
                greeting && <section className='px-20 bg-purple-600 w-full py-4 fixed bottom-0 left-0 z-40'>
                    <main className='text-white'>
                        <h4 className='text-lg font-medium underline underline-offset-1'>Hello <span>{username}</span>, Selamat datang ditoko buku kami, silahkan pilih buku yang anda sukai!!</h4>
                    </main>
                </section>
            }
            <header className="px-6 lg:px-20 py-6 w-full fixed top-0 left-0 bg-white z-50 shadow-md">
                <div className="container-header flex items-center justify-between">
                    <Link to="/" className='hidden lg:block'>
                        <img src={Logo} alt="book logo" width="130" />
                    </Link>
                    <div className="border-2 border-purple-200 rounded-lg flex items-center w-full lg:w-3/5">
                        <div className="hidden lg:flex items-center space-x-2 border-r-2 border-purple-200 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>

                            <div className="flex items-center space-x-2 ml-2 text-purple-500 cursor-pointer">
                                <span className='font-medium text-sm'>Menus</span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                    <div className='flex lg:hidden items-center space-x-2 ml-4 text-gray-800'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <Link to="/cart" className='cursor-pointer realtive'>
                            {isCart && <div className="flex items-center justify-center h-4 w-4 rounded-full bg-purple-500 text-white absolute top-7 right-14">{cartCount}</div>}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>

                    {
                        changeLogin && username !== "" ? <div className='flex items-center space-x-3'>
                        <div className="rounded-lg border border-gray-300 p-2 text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <Link to="/cart" className="rounded-lg border border-gray-300 p-2 text-purple-500 relative" onClick={handleaddChart}>

                            {isCart && <div className="flex items-center justify-center absolute -top-2 -right-2 bg-purple-500 text-yellow-400 w-5 h-5 text-xs rounded-full">{cartCount}</div>}

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                        <div className="rounded-lg border border-gray-300 p-2 text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <div className="rounded-lg border border-gray-300 p-2 text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>
                    </div> : <div className="signs hidden lg:flex items-center space-x-6">
                        <button className="text-sm font-medium py-2 px-3 bg-purple-100 text-purple-500 rounded-lg hover:bg-purple-200" onClick={handleFakeLogin}>Log in</button>
                        <button className="flex space-x-2 items-center justify-center py-2 px-3 bg-purple-500 hover:bg-purple-600 text-gray-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>

                        <span className='text-sm font-medium'>Sign Out</span>
                        </button>
                    </div>
                    }

                </div>
            </header>

            {
                isLogin && <LoginModal />
            }
        </>
    )
}
