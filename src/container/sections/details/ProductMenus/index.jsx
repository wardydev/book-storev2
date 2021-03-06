import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomerService from '../../../components/CustomerService'
import DetailProduct from '../../../components/DetailProduct'
import './index.css'

export default function ProductMenus() {
    const [changeComponent, setChangeComponent] = useState(false)

    return (
        <section className="w-full lg:w-3/4">
            <div>
                <div className="flex space-x-0 lg:space-x-6 items-center justify-between lg:justify-start mb-8">
                    <Link
                    to="/detail-book"
                    className={changeComponent ? 'text-gray-500 font-medium text-xl' : 'text-gray-900 font-medium text-xl'}
                    onClick={() => setChangeComponent(false)}
                    >Details Product</Link>

                    <Link
                    to="/detail-book"
                    className={changeComponent ? 'text-gray-900 font-medium text-xl' : 'text-gray-500 font-medium text-xl'}
                    onClick={() => setChangeComponent(true)}
                    >Customers Services</Link>
                </div>

                {
                    changeComponent ? <CustomerService /> : <DetailProduct />
                }
            </div>
        </section>
    )
}
