import React from 'react'
import Aside_home from '../components/Adise/Adise_home/Aside_home'
import Footer from '../components/Footer/Footer'
import Nav_home from '../components/Nav/Nav_home'
import Secton_home from '../components/Section/Section_home/Section_home'

const Home = () => {
    return (
        <>
            <Nav_home />
            <Secton_home />
            <Aside_home />
            <Footer />
        </>
    )
}

export default Home