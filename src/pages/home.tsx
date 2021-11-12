import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Banner from '../components/Banner';
import Footer from '../components/footer/Footer';
import BottomBar from '../components/bottomBar/BottomBar';
import * as colors from '../theme/colors';

export default function home() {
    return (
      <div style={{ backgroundColor: colors.pageBgLight}}>
            <Navigationbar />
            <Banner />
            <Footer />
        </div>
    )
}
