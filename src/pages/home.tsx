import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Banner from '../components/Banner';
import Footer from '../components/footer/Footer';

export default function home() {
    return (
        <div>
            <Navigationbar />
            <Banner />
            <Footer />
        </div>
    )
}
