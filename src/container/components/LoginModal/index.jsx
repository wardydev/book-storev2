import React from 'react'

export default function LoginModal() {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center'>
            <main className='p-6 bg-white rounded-lg w-2/6 text-center relative'>
                <div className="absolute hover:text-purple-500 top-4 cursor-pointer right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl text-gray-700 font-medium">Input your name for fake login</h2>
                </div>
                <input type="text" placeholder='Input your name' className='py-3 px-4 focus:outline-none w-full bg-gray-200 rounded-lg mb-4' />
                <button className='py-3 w-full text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium'>Login</button>
            </main>
        </div>
    )
}
