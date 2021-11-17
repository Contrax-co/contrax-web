import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import BottomBar from '../components/bottomBar/BottomBar';

export default function manageToken() {
    return (
        <div>
            <Navigationbar />
            <Header />
            <BottomBar />
        </div>
    )
}
