import { Route, Routes } from 'react-router-dom'
import React from 'react'

import './App.css'
import Home from './pages/Home'
import Kompaniya from './pages/Kompaniya'
import Brend from './pages/Brend'
import Menu from './pages/Menu'
import Login from './components/Login/Login'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './pages/Cart'

import Telefon_gadjet_aksessuar from './pages/Telefon_gadjet_aksessuar'
import Samsung_galaxy from './pages/Samsung_galaxy'
import Xiaomi_redmi from './pages/Xiaomi_redmi'
import Apple_iPhone from './pages/Apple_iPhone'
import Zte from './pages/Zte'
import Tcl from './pages/Tcl'

import Admin_1 from './components/Admin/Admin_1'
import Admin_2 from './components/Admin/Admin_2'
import Admin_3 from './components/Admin/Admin_3'
import Alcatel from './pages/Alcatel'

import Noutbook from '../src/pages/Noutbook'
import HP from './pages/HP'
import Dell from './pages/Dell'
import MSI from './pages/MSI'
import Honor from './pages/Honor'
import Acer from './pages/Acer'
import Televizor from './pages/Televizor'
import Samsung_tv from './pages/Samsung_tv'
import Xiaomi_tv from './pages/Xiaomi_tv'
import Shivaki_tv from './pages/Shivaki_tv'
import Artel_tv from './pages/Artel_tv'
import Lg_tv from './pages/Lg_tv'
import Avto from './pages/Avto'



function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu/:_id' element={<Menu />} />
        <Route path='/kompaniya' element={<Kompaniya />} />
        <Route path='/brend' element={<Brend />} />

        <Route path='/telefon_gadjet_aksessuar' element={<Telefon_gadjet_aksessuar />} />
        <Route path='/telefon_gadjet_aksessuar/samsung_galaxy' element={<Samsung_galaxy />} />
        <Route path='/telefon_gadjet_aksessuar/xiaomi_redmi' element={<Xiaomi_redmi />} />
        <Route path='/telefon_gadjet_aksessuar/apple_iphone' element={<Apple_iPhone />} />
        <Route path='/telefon_gadjet_aksessuar/tcl' element={<Tcl />} />
        <Route path='/telefon_gadjet_aksessuar/alcatel' element={<Alcatel />} />
        <Route path='/telefon_gadjet_aksessuar/zte' element={<Zte />} />

        <Route path='/noutbook' element={<Noutbook />} />
        <Route path='/noutbook/acer/' element={<Acer />} />
        <Route path='/noutbook/dell/' element={<Dell />} />
        <Route path='/noutbook/honor/' element={<Honor />} />
        <Route path='/noutbook/msi/' element={<MSI />} />
        <Route path='/noutbook/hp/' element={<HP />} />

        <Route path='/televizor' element={<Televizor />} />
        <Route path='/televizor/samsung_tv' element={<Samsung_tv />} />
        <Route path='/televizor/xiaomi_tv' element={<Xiaomi_tv />} />
        <Route path='/televizor/shivaki_tv' element={<Shivaki_tv />} />
        <Route path='/televizor/artel_tv' element={<Artel_tv />} />
        <Route path='/televizor/lg_tv' element={<Lg_tv />} />

        <Route path='/avto' element={<Avto />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/_ber_sss_erk_/admin_1' element={<Admin_1 />} />
        <Route path='/_ber_sss_erk_/admin_2' element={<Admin_2 />} />
        <Route path='/_ber_sss_erk_/admin_3' element={<Admin_3 />} />
    
      </Routes>
    </>
  )
}
export default App
