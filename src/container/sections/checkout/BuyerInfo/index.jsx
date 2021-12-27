import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../../redux'

export default function BuyerInfo() {
    const dispatch = useDispatch()
    const {handleCheckoutStepper, handleShoppingSummaryStepper} = bindActionCreators(actionCreator, dispatch)
    const checkoutStatus = useSelector(state => state.checkout)
    const {checkout, shoppingSummary} = checkoutStatus

    const checkoutStepper = () => {
        // do something
        handleCheckoutStepper(!checkout)
        handleShoppingSummaryStepper(!shoppingSummary)
    }

    return (
        <main className="w-full mb-12 lg:mb-0">
            <h2 className="text-gray-900 font-bold text-3xl mb-12">Buyer Info</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-10 items-start w-full">
                <form action="" className='col-span-2'>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="fname" className="font-medium  text-gray-500 text-xs">FIRSTNAME</label>
                            <input type="text" id='fname' className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="lname" className="font-medium  text-gray-500 text-xs">LASTNAME</label>
                            <input type="text" id="lname" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="pnumber" className="font-medium  text-gray-500 text-xs">PHONE NUMBER</label>
                            <input type="text" id='pnumber' className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="email" className="font-medium  text-gray-500 text-xs">EMAIL</label>
                            <input type="email" id="email" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">ADDRESS</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">STATE</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">POSTCODE/ZIP</label>
                            <input disabled type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">NOTE</label>
                            <textarea className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                </form>

                <div className='p-4 shadow-md rounded-lg'>
                    <h4 className='text-gray-700 text-base font-medium mb-4'>Ringkasan belanja</h4>
                    <div className="flex items-center justify-between mb-4">
                        <span className='text-gray-400'>Total Harga</span>
                        <span className='text-gray-400'>Rp80.000</span>
                    </div>
                    <hr className="w-full mb-4" />

                    <div className="flex items-center justify-between mb-4">
                        <h5 className='text-base font-medium text-gray-700'>Total harga</h5>
                        <span className='text-base font-medium text-gray-700'>Rp.200</span>
                    </div>
                    <button onClick={checkoutStepper} className="w-full py-3 text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">Checkout Sekarang</button>
                </div>
            </div>
        </main>
    )
}
