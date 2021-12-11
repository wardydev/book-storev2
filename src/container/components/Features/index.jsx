import React from 'react'

export default function Features() {
    return (
        <section className="features py-28 lg:py-20 px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 lg:gap-x-6 gap-y-6 lg:gap-y-0">
                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:space-y-0">
                    <div className="bg-purple-100 text-purple-500 p-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 lg:h-6 w-10 lg:w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-gray-800 text-center lg:text-left">
                        <h4 className="font-bold text-xl lg:text-lg">Quick Delivery</h4>
                        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur Lorem.</p>
                    </div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:space-y-0">
                    <div className="bg-purple-100 text-purple-500 p-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 lg:h-6 w-10 lg:w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="text-gray-800 text-center lg:text-left">
                        <h4 className="font-bold text-xl lg:text-lg">Secure Payment</h4>
                        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:space-y-0">
                    <div className="bg-purple-100 text-purple-500 p-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 lg:h-6 w-10 lg:w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                    </div>
                    <div className="text-gray-800 text-center lg:text-left">
                        <h4 className="font-bold text-xl lg:text-lg">Best Quality</h4>
                        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur Lorem</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-6 lg:space-y-0">
                    <div className="bg-purple-100 text-purple-500 p-4 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 lg:h-6 w-10 lg:w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <div className="text-gray-800 text-center lg:text-left">
                        <h4 className="font-bold text-xl lg:text-lg">Return Guarante</h4>
                        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur Lorem</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
