import React from 'react'
import Layout from '../../components/Layout'
import CartImage from '../../../assets/images/dummy-book/cart-image.jpg'

export default function Cart() {
    return (
        <Layout>
            <section className="px-6 lg:px-40 py-8 border-t">
                <main className='grid grid-cols-1 lg:grid-cols-3 items-start gap-12'>
                    <div className='col-span-2 w-full lg:w-auto'>
                        <h2 className='text-2xl text-gray-800 font-medium'>Keranjang</h2>

                        <div className="mt-8 border-b-2 pb-6 mb-8">
                            <div className='flex items-center space-x-4  mb-6'>
                                <input type="checkbox" />

                                <div className='flex items-center space-x-4'>
                                    <img src={CartImage} className='w-20' alt='cart' />
                                    <div>
                                        <h4 className='text-base lg:text-lg text-gray-700'>Jaket Olahraga IMPORT Anti Sinar UV / Anti Air Unisex Pria dan Wanit</h4>
                                        <p className='text-gray-400 mb-2 text-sm lg:text-base'>Biru Muda, M</p>
                                        <b className='text-gray-700'>Rp80.000</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pl-0 lg:pl-7">
                                <span className='text-purple-500 cursor-pointer mb-4 lg:mb-0'>Tulis Catetan</span>
                                <div className='flex justify-between lg:justify-start space-x-0 lg:space-x-4 items-center w-full lg:w-auto'>
                                    <span className='text-gray-400'>Pindahkan ke Whislist</span>
                                    <hr className="h-6 border-l-4 hidden lg:block" />
                                    
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <div className="flex items-center space-x-3 pl-6">
                                            <div className='border-2 cursor-pointer rounded-full text-gray-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className='font-medium'>1</span>
                                            <div className='border-2 border-purple-600 cursor-pointer rounded-full text-purple-600 cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="border-b-2 pb-6 mb-8">
                            <div className='flex items-center space-x-4  mb-6'>
                                <input type="checkbox" />

                                <div className='flex items-center space-x-4'>
                                    <img src={CartImage} className='w-20' alt='cart' />
                                    <div>
                                        <h4 className='text-base lg:text-lg text-gray-700'>Jaket Olahraga IMPORT Anti Sinar UV / Anti Air Unisex Pria dan Wanit</h4>
                                        <p className='text-gray-400 mb-2 text-sm lg:text-base'>Biru Muda, M</p>
                                        <b className='text-gray-700'>Rp80.000</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pl-0 lg:pl-7">
                                <span className='text-purple-500 cursor-pointer mb-4 lg:mb-0'>Tulis Catetan</span>
                                <div className='flex justify-between lg:justify-start space-x-0 lg:space-x-4 items-center w-full lg:w-auto'>
                                    <span className='text-gray-400'>Pindahkan ke Whislist</span>
                                    <hr className="h-6 border-l-4 hidden lg:block" />
                                    
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <div className="flex items-center space-x-3 pl-6">
                                            <div className='border-2 cursor-pointer rounded-full text-gray-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className='font-medium'>1</span>
                                            <div className='border-2 border-purple-600 cursor-pointer rounded-full text-purple-600 cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="border-b-2 pb-6 mb-8">
                            <div className='flex items-center space-x-4  mb-6'>
                                <input type="checkbox" />

                                <div className='flex items-center space-x-4'>
                                    <img src={CartImage} className='w-20' alt='cart' />
                                    <div>
                                        <h4 className='text-base lg:text-lg text-gray-700'>Jaket Olahraga IMPORT Anti Sinar UV / Anti Air Unisex Pria dan Wanit</h4>
                                        <p className='text-gray-400 mb-2 text-sm lg:text-base'>Biru Muda, M</p>
                                        <b className='text-gray-700'>Rp80.000</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pl-0 lg:pl-7">
                                <span className='text-purple-500 cursor-pointer mb-4 lg:mb-0'>Tulis Catetan</span>
                                <div className='flex justify-between lg:justify-start space-x-0 lg:space-x-4 items-center w-full lg:w-auto'>
                                    <span className='text-gray-400'>Pindahkan ke Whislist</span>
                                    <hr className="h-6 border-l-4 hidden lg:block" />
                                    
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <div className="flex items-center space-x-3 pl-6">
                                            <div className='border-2 cursor-pointer rounded-full text-gray-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className='font-medium'>1</span>
                                            <div className='border-2 border-purple-600 cursor-pointer rounded-full text-purple-600 cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="border-b-2 pb-6 mb-8">
                            <div className='flex items-center space-x-4  mb-6'>
                                <input type="checkbox" />

                                <div className='flex items-center space-x-4'>
                                    <img src={CartImage} className='w-20' alt='cart' />
                                    <div>
                                        <h4 className='text-base lg:text-lg text-gray-700'>Jaket Olahraga IMPORT Anti Sinar UV / Anti Air Unisex Pria dan Wanit</h4>
                                        <p className='text-gray-400 mb-2 text-sm lg:text-base'>Biru Muda, M</p>
                                        <b className='text-gray-700'>Rp80.000</b>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pl-0 lg:pl-7">
                                <span className='text-purple-500 cursor-pointer mb-4 lg:mb-0'>Tulis Catetan</span>
                                <div className='flex justify-between lg:justify-start space-x-0 lg:space-x-4 items-center w-full lg:w-auto'>
                                    <span className='text-gray-400'>Pindahkan ke Whislist</span>
                                    <hr className="h-6 border-l-4 hidden lg:block" />
                                    
                                    <div className='flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        <div className="flex items-center space-x-3 pl-6">
                                            <div className='border-2 cursor-pointer rounded-full text-gray-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className='font-medium'>1</span>
                                            <div className='border-2 border-purple-600 cursor-pointer rounded-full text-purple-600 cursor-pointer'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 shadow-md hidden lg:block'>
                        <h4 className='text-gray-700 text-base font-medium mb-4'>Ringkasan belanja</h4>
                        <div className="flex items-center justify-between mb-4">
                            <span className='text-gray-400'>Total Harga (1 barang)</span>
                            <span className='text-gray-400'>Rp80.000</span>
                        </div>
                        <hr className="w-full mb-4" />

                        <div className="flex items-center justify-between mb-4">
                            <h5 className='text-base font-medium text-gray-700'>Total harga</h5>
                            <span className='text-base font-medium text-gray-700'>Rp80.000</span>
                        </div>
                        <button className="w-full py-3 text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">Beli Sekarang</button>
                    </div>
                </main>
            </section>

            <div className='lg:hidden block fixed bottom-0 left-0 w-full p-6 bg-white'>
                <main className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <span className="text-base text-gray-400">Total harga</span>
                        <span className='text-lg font-medium text-gray-700'>Rp80.000</span>
                    </div>
                    <button className="py-3 px-6 text-white bg-purple-500 hover:bg-purple-600 rounded-lg font-medium">Beli Sekarang</button>
                </main>
            </div>
        </Layout>
    )
}
