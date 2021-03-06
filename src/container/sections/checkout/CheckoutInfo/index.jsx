import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import CartImage from '../../../../assets/images/dummy-book/cart-image.jpg'
import { actionCreator } from '../../../../redux'

export default function CheckoutInfo() {
    const checkoutStatus = useSelector(state => state.checkout)
    const {payments, checkout} = checkoutStatus
    const dispatch = useDispatch()
    const {handlePaymentsStepper, handleCheckoutStepper} = bindActionCreators(actionCreator, dispatch)

    const handleCheckoutNext = () => {
        handlePaymentsStepper(!payments)
        handleCheckoutStepper(!checkout)
    }
    return (
        <main className="w-full mb-12 lg:mb-0">
            <h2 className="text-gray-900 font-bold text-3xl mb-12">Checkout</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-10 items-start w-full">
                <div className="col-span-2">
                    <div className="mb-12">
                        <h4 className="text-xl mb-4 text-gray-800 font-medium">Alamat Pengiriman</h4>
                        <hr className="w-full" />
                        <div className="my-4">
                            <h5 className='text-lg text-gray-700'><span className='font-medium'>Haerul wardy</span> (rumah)</h5>
                            <p className='text-base text-gray-700 mt-1'>0-274-48-5929</p>
                            <p className="mt-3 text-base text-gray-600">Perum Yadara Bl I/20 Yogyakarta, Jawa Tengah,  Jawa Tengah, Yogyakarta, 0-274-48-5929, 55281, Indonesia</p>
                        </div>
                        <hr className="w-full" />
                        <div className="mt-3">
                            <span className='underline underline-offset-1 text-purple-500 hover:text-purple-600 cursor-pointer'>Edit Alamat</span>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img src={CartImage} alt="cart" className='w-24' />
                        <div>
                            <p className="text-base text-gray-600 mb-1">The Raven Boys</p>
                            <p className="text-sm text-gray-400">Maggie Stiefvater, English</p>
                            <b>$18,78</b>
                        </div>
                    </div>
                </div>

                <div className='p-4 shadow-md rounded-lg mt-12 lg:mt-0'>
                    <h4 className='text-gray-700 text-base font-medium mb-4'>Shopping Summary</h4>
                    <div className="flex items-center justify-between mb-4">
                        <span className='text-gray-400'>Total Price</span>
                        <span className='text-gray-400'>$18,78</span>
                    </div>
                    <hr className="w-full mb-4" />

                    <div className="flex items-center justify-between mb-4">
                        <h5 className='text-base font-medium text-gray-700'>Total Price</h5>
                        <span className='text-base font-medium text-gray-700'>$18,78</span>
                    </div>
                    <button onClick={handleCheckoutNext} className="w-full py-3 text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">Pembayaran</button>
                </div>
            </div>
        </main>
    )
}
