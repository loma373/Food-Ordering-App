import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div><Carousel/></div>
            <div className='m-3'>
                <Card/>
            </div>
            <Footer />
        </div>
    )
}
