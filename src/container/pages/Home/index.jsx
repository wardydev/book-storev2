import React from 'react'

// components
import Features from '../../components/Features'
import BookOnSale from '../../components/BookOnSale'
import Newsletter from '../../components/Newsletter'

// sections
import Hero from '../../sections/home/Hero'
import RecommendedBook from '../../sections/home/RecommendedBook'
import SpecialOffers from '../../sections/home/SpecialOffers'
import Flashsale from '../../sections/home/Flashsale'
import FeaturedBook from '../../sections/home/FeaturedBook'
import Testimonial from '../../sections/home/Testimonial'
import Latenews from '../../sections/home/Latenews'
import Thrust from '../../sections/home/Thrust'
import Layout from '../../components/Layout'

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Features />
            <RecommendedBook />
            <SpecialOffers />
            <Flashsale />
            <BookOnSale />
            <FeaturedBook />
            <Testimonial />
            <Latenews />
            <Thrust />
            <Newsletter />
        </Layout>
    )
}
