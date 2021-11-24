import React from 'react'

// css
import './index.css'

export default function Newsletter() {
    return (
        <section className="newsletter px-20 py-20 bg-purple-700">
            <div className="relative z-10">
                <div className="text-center w-2/4 mx-auto mb-10">
                    <h3 className="text-3xl my-2 text-gray-50 font-medium">Subscribe our newsletter for newest books updates</h3>
                </div>
                <div className="flex justify-center mx-auto items-center w-2/4">
                    <input type="text" placeholder="Type your email here" className="bg-gray-200 bg-opacity-20 text-gray-50 focus:outline-none font-medium py-4 px-6 rounded-tl-lg rounded-bl-lg w-full" />
                    <button className="py-4 px-6 bg-gray-50 rounded-tr-lg rounded-br-lg font-medium hover:bg-gray-200 text-purple-600">Subscribe</button>
                </div>
            </div>
        </section>
    )
}
