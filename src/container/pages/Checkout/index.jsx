import React from 'react'
import Features from '../../components/Features'
import Layout from '../../components/Layout'
import Stepper from '../../components/Stepper'
import BreadCrumbs from '../../sections/books/BreadCrumbs'
import BuyerInfo from '../../sections/checkout/BuyerInfo'
import Payments from '../../sections/checkout/Payments'

export default function Checkout() {
    return (
        <Layout>
            <BreadCrumbs />
            <Stepper />
            <section className="px-6 lg:px-20 py-16 flex flex-col lg:flex-row space-x-0 lg:space-x-6">
                <BuyerInfo />
                <Payments />
            </section>
            <Features />
        </Layout>
    )
}
