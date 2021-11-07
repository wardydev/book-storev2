import React from 'react'

// components
import Footer from '../Footer'
import Header from '../Header'

export default function Layout({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
