import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../redux'

export default function Stepper() {
    const checkoutStatus = useSelector(state => state.checkout)
    const {checkout, payments, finished} = checkoutStatus
    const dispatch = useDispatch()
    const {handleShoppingSummaryStepper, handleCheckoutStepper, handlePaymentsStepper} = bindActionCreators(actionCreator, dispatch)

    const handleShoppingSummary = () => {
        handleShoppingSummaryStepper(true)
        handleCheckoutStepper(false)
        handlePaymentsStepper(false)
    }

    const handleCheckoutPrev = () => {
        handlePaymentsStepper(false)
        handleCheckoutStepper(true)
    }

    return (
        <section className="px-0 lg:px-28 py-10 mt-32">
            <div className="flex justify-around">
                <div className="shopping flex flex-col items-center">
                    <div onClick={handleShoppingSummary} className="mb-4 h-12 w-12 cursor-pointer bg-purple-500 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>

                        <div className="h-1 w-20 lg:w-72 bg-purple-500 absolute left-full top-2/4"></div>
                    </div>
                    <p className="font-medium hidden lg:block">Shopping Summary</p>
                </div>
                <div className="shopping flex flex-col items-center">
                    {
                        checkout || payments || finished ? <div onClick={handleCheckoutPrev} className="mb-4 cursor-pointer h-12 w-12 bg-purple-500 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>

                        <div className="h-1 w-20 lg:w-72 bg-purple-500 absolute left-full top-2/4"></div>
                    </div> : <div className="mb-4 h-12 w-12 bg-purple-200 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>

                        <div className="h-1 w-20 lg:w-72 bg-purple-500 absolute left-full top-2/4"></div>
                    </div>
                    }
                    <p className="font-medium hidden lg:block">Checkout</p>
                </div>
                <div className="shopping flex flex-col items-center">
                    
                    {
                        payments || finished ? <div className="mb-4 h-12 w-12 bg-purple-500 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>

                        <div className="h-1 w-20 lg:w-56 bg-purple-500 absolute left-full top-2/4"></div>
                    </div> : <div className="mb-4 h-12 w-12 bg-purple-200 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>

                        <div className="h-1 w-20 lg:w-56 bg-purple-500 absolute left-full top-2/4"></div>
                    </div>
                    }

                    <p className="font-medium hidden lg:block">Payments</p>
                </div>
                <div className="shopping flex flex-col items-center">
                    {
                        finished ? <div className="mb-4 h-12 w-12 bg-purple-500 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        </div> : <div className="mb-4 h-12 w-12 bg-purple-200 text-gray-50 rounded-full flex items-center justify-center relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    }
                    <p className="font-medium hidden lg:block">Finished</p>
                </div>
            </div>
        </section>
    )
}
