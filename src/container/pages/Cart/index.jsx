import React, { useRef, useState } from 'react'
import Layout from '../../components/Layout'
import CartImage from '../../../assets/images/dummy-book/cart-image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../redux'
import { Link } from 'react-router-dom'

export default function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const {handleRemoveCartCount,
        handleShoppingSummaryStepper,
        handleCheckoutStepper,
        handlePaymentsStepper,
        handleFinishedStepper} = bindActionCreators(actionCreator, dispatch)
    const [productCount, setProductCount] = useState(1)
    const [product, setProduct] = useState(0)
    const checkRef = useRef()

    const {cartCount} = cart
    let carts = []
    for(let i = 0; i <= cartCount - 1; i++) {
        carts.push(i)
    }

    const handleRemoveCart = () => {
        handleRemoveCartCount(1)
    }

    const handleAddProductCount = () => {
        setProductCount(prevState => prevState + 1)
    }

    const handleRemoveProductCount = () => {
        setProductCount(prevState => prevState - 1)
        if(productCount <= 0) {
            setProductCount(0)
        }
    }

    const handleCheckbox = () => {
        if(checkRef.current) {
            setProduct(prevState => prevState + 1)
        }
    }

    const handleResetCheckout = () => {
        handleShoppingSummaryStepper(true)
        handleCheckoutStepper(false)
        handlePaymentsStepper(false)
        handleFinishedStepper(false)
    }

    return (
        <Layout>
            <section className="px-6 mt-32 lg:px-40 py-8 border-t">
                <main className='grid grid-cols-1 lg:grid-cols-3 items-start gap-12'>
                    <div className='col-span-2 w-full lg:w-auto'>
                        <h2 className='text-2xl text-gray-800 font-medium'>Carts</h2>

                        {
                            carts.map((i) => {
                                return <div className="mt-8 border-b-2 pb-6 mb-8" key={i}>
                                    <div className='flex items-center space-x-4  mb-6'>
                                        <input ref={checkRef} type="checkbox" onChange={handleCheckbox}/>
        
                                        <div className='flex items-center space-x-4'>
                                            <Link to="/detail-book">
                                                <img src={CartImage} className='w-20' alt='cart' />
                                            </Link>
                                            <div>
                                                <h4 className='text-base lg:text-lg text-gray-700'>The Raven Boys</h4>
                                                <p className='text-gray-400 mb-2 text-sm lg:text-base'>Maggie Stiefvater, English</p>
                                                <b className='text-gray-700'>$18,78</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pl-0 lg:pl-7">
                                        <span className='text-purple-500 cursor-pointer mb-4 lg:mb-0'>Add Note</span>
                                        <div className='flex justify-between lg:justify-start space-x-0 lg:space-x-4 items-center w-full lg:w-auto'>
                                            <span className='text-gray-400 cursor-pointer'>Add to Wishlist</span>
                                            <hr className="h-6 border-l-4 hidden lg:block" />
                                            
                                            <div className='flex items-center'>
                                                <svg onClick={handleRemoveCart} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                <div className="flex items-center space-x-3 pl-6">
                                                    <div onClick={handleRemoveProductCount} className='border-2 cursor-pointer rounded-full text-gray-400'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className='font-medium'>{productCount}</span>
                                                    <div onClick={handleAddProductCount} className='border-2 border-purple-600 cursor-pointer rounded-full text-purple-600 cursor-pointer'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                        
                    </div>
                    <div className='p-4 shadow-md hidden lg:block'>
                        <h4 className='text-gray-700 text-base font-medium mb-4'>Shopping Summary</h4>
                        <div className="flex items-center justify-between mb-4">
                            <span className='text-gray-400'>Total price ({`${product} barang`}) </span>
                            <span className='text-gray-400'>$18,78</span>
                        </div>
                        <hr className="w-full mb-4" />

                        <div className="flex items-center justify-between mb-4">
                            <h5 className='text-base font-medium text-gray-700'>Total price</h5>
                            <span className='text-base font-medium text-gray-700'>$18,78</span>
                        </div>
                        <Link to="/checkout" onClick={handleResetCheckout}>
                        <button className="w-full py-3 text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">Pay Now</button>
                        </Link>
                    </div>
                </main>
            </section>

            <div className='lg:hidden block fixed bottom-0 left-0 w-full p-6 bg-white z-40'>
                <main className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <span className="text-base text-gray-400">Total harga</span>
                        <span className='text-lg font-medium text-gray-700'>$18,78</span>
                    </div>
                    <Link to="/checkout" className="py-3 px-6 text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">Beli Sekarang</Link>
                </main>
            </div>
        </Layout>
    )
}
