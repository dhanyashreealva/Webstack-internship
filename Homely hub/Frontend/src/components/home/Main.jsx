import React from 'react'
import Header from './Header'
import PropertyList from './PropertyList'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
      <Header/>
      {/* <Outlet/> */}
      <PropertyList/>
      <Footer/>

    </div>
  )
}

export default Main
