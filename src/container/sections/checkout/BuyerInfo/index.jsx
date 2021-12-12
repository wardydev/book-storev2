import React from 'react'

export default function BuyerInfo() {
    return (
        <main className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-gray-900 font-bold text-3xl mb-10">Buyer Info</h2>
            <div className="form">
                <form action="">
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">FIRSTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">LASTNAME</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
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
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">ADDRESS</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center space-x-0 lg:space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">STATE</label>
                            <input disabled type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">POSTCODE/ZIP</label>
                            <input type="text" className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="" className="font-medium  text-gray-500 text-xs">NOTE</label>
                            <textarea className="py-3 px-2 rounded-lg border border-gray-200 focus:outline-none" />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}
