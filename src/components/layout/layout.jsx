import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from '../common/ScrollToTop'
const Layout = () => {
  return (
    <>
    <div className='min-h-screen'>
    <Navbar />   
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout
