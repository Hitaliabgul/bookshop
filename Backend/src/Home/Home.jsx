import React from 'react'
import Navbar from '../Components/Navbar'
import Freebook from '../Components/Freebook'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
        </div>
    )
}

export default Home