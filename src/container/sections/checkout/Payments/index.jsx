import React from 'react'

// payments method
import Visa from '../../../../assets/logo/payment/visa.png'
import Mastercard from '../../../../assets/logo/payment/mastercard.png'
import Paypal from '../../../../assets/logo/payment/paypal.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../../redux'

export default function Payments() {
    const checkoutStatus = useSelector(state => state.checkout)
    const {finished} = checkoutStatus
    const dispatch = useDispatch()
    const {handleFinishedStepper, handlePaymentsStepper} = bindActionCreators(actionCreator, dispatch)

    const handlePayment = (e) => {
        e.preventDefault()
        handleFinishedStepper(!finished)
        handlePaymentsStepper(false)
    }
    return (
        <main className="w-full px-0 lg:px-36">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-3 gap-y-4 lg:gap-y-0 mb-10">
                <div className="h-32 w-full border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer">
                    <div className="items-center">
                        <img src={Visa} alt="visa" className='w-2/4 mx-auto' />
                    </div>
                </div>
                <div className="h-32 w-full border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer">
                    <div className="items-center">
                        <img src={Mastercard} alt="mastercard" className='w-2/4 mx-auto ' />
                    </div>
                </div>
                <div className="h-32 w-full border-2 border-gray-200 rounded-lg flex items-center justify-center cursor-pointer">
                    <div className="items-center">
                        <img src={Paypal} alt="paypal" className='w-2/4 mx-auto' />
                    </div>
                </div>
            </div>

            <hr className="w-full border-dashed border-t-2 border-gray-600" />

            <div className="form mt-10">
                <form onSubmit={handlePayment} action="">
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">CARD NUMBER</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">CARD HOLDER</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex items-end space-x-2 w-full lg:w-auto mb-4 lg:mb-0">
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="expirydate" className="font-medium  text-gray-500 text-xs">EXPIRY DATE</label>
                                <select id="expirydate" className='py-3 px-2 rounded-lg border border-gray-200 focus:outline-none'>
                                    <option value="">Month</option>
                                    <option value="">Januari</option>
                                    <option value="">Februari</option>
                                    <option value="">Maret</option>
                                    <option value="">April</option>
                                    <option value="">Mei</option>
                                    <option value="">Juni</option>
                                    <option value="">Juli</option>
                                    <option value="">Agustus</option>
                                    <option value="">September</option>
                                    <option value="">Oktober</option>
                                    <option value="">November</option>
                                    <option value="">Desember</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                            <select id="expirydate" className='py-3 px-2 rounded-lg border border-gray-200 focus:outline-none'>
                                    <option value="">Year</option>
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                    <option value="">2023</option>
                                    <option value="">2024</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-end space-x-4 w-full">
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="font-medium  text-gray-500 text-xs">CVC</label>
                                <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <hr className="w-full" />
                    <div className='my-2 w-full py-4'>
                        <h4 className="text-lg text-gray-700 font-medium">Ringkasan Belanja</h4>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Total Harga</p>
                            <p className="text-gray-600">Rp80.000</p>
                        </div>
                    </div>
                    <button className="py-3 w-full text-gray-50 bg-purple-500 hover:bg-purple-600 rounded-lg">Finished Payment</button>
                </form>
            </div>
        </main>
    )
}
