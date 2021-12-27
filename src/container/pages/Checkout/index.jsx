import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import Stepper from '../../components/Stepper'
import BuyerInfo from '../../sections/checkout/BuyerInfo'
import CheckoutInfo from '../../sections/checkout/CheckoutInfo'
import Finished from '../../sections/checkout/Finished'
import Payments from '../../sections/checkout/Payments'

export default function Checkout() {
    const checkoutStatus = useSelector(state => state.checkout)
    const {shoppingSummary, checkout, payments, finished} = checkoutStatus
    
    return (
        <Layout>
            <Stepper />
            <section className="px-6 lg:px-36 py-16 mb-20">
                <main>
                    {shoppingSummary && <BuyerInfo />}
                    {checkout && <CheckoutInfo />}
                    {payments && <Payments />}
                    {finished && <Finished />}
                </main>
            </section>
        </Layout>
    )
}
