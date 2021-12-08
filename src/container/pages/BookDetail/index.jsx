import React from 'react'
import BookOnSale from '../../components/BookOnSale'
import Features from '../../components/Features'

// components
import Layout from '../../components/Layout'
import Newsletter from '../../components/Newsletter'
import BreadCrumbs from '../../sections/books/BreadCrumbs'
import DetailsBook from '../../sections/details/DetailsBook'
import ProductMenus from '../../sections/details/ProductMenus'
import RelatedBooks from '../../sections/details/RelatedBooks'
import Sponsorship from '../../sections/details/Sponsorship'

export default function BookDetail() {
    return (
        <Layout>
            <BreadCrumbs />
            <DetailsBook />
            
            <div className="px-20 py-16 flex space-x-6 items-start">
                <ProductMenus />
                <RelatedBooks />
            </div>

            <Features />
            <BookOnSale />
            <Sponsorship />
            <Newsletter />
        </Layout>
    )
}
