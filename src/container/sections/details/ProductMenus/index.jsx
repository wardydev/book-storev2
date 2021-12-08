import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductMenus() {
    return (
        <section className="w-3/4">
            <div>
                <div className="flex space-x-6 items-center mb-8">
                    <Link to="/detail-book" className="text-gray-900 font-medium text-2xl">Details Product</Link>
                    <Link to="/detail-book" className="text-gray-500 font-medium text-2xl">Customers Services Product</Link>
                </div>
                <div className="rounded-lg border border-gray-200">
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Book Title</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Author</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">ISBN</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Edition Language</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Book Format</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Date Published</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4 border-b border-gray-200">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Publisher</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="w-2/4 flex justify-between">
                            <span className="font-medium text-gray-800">Tags</span>
                            <span className="text-gray-500">Book Title</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
