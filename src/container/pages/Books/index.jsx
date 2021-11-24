import React from 'react'

// component
import BookOnSale from '../../components/BookOnSale'
import Features from '../../components/Features'
import Layout from '../../components/Layout'
import Newsletter from '../../components/Newsletter'

export default function Books() {
    return (
        <Layout>
            <BookOnSale />

            <div className="py-16">
                <Features />
            </div>
            <Newsletter />
        </Layout>
    )
}
