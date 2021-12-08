import React from 'react'

export default function Payments() {
    return (
        <main className="w-1/2">
            <h2 className="text-gray-900 font-bold text-3xl mb-10">Buyer Info</h2>

            <div className="grid grid-cols-3 gap-x-3 mb-10">
                <div className="h-32 w-full border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="items-center">
                        <h4 className="font-medium">Bank Transfer</h4>
                    </div>
                </div>
                <div className="h-32 w-full border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="items-center">
                        <h4 className="font-medium">Credit Card</h4>
                    </div>
                </div>
                <div className="h-32 w-full border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <div className="items-center">
                        <h4 className="font-medium">Paypal</h4>
                    </div>
                </div>
            </div>

            <hr className="w-full border-dashed border-t-2 border-gray-600" />

            <div className="form mt-10">
                <form action="">
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">FIRSTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">FIRSTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">LASTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">FIRSTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">LASTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <button className="py-3 w-full text-gray-50 bg-purple-500 hover:bg-purple-600 rounded-lg">Buy Now</button>
                </form>
            </div>
        </main>
    )
}
