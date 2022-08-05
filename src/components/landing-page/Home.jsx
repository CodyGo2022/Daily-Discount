import React from 'react'

import Nav from '../landing-page/Nav'
import Body from '../landing-page/Body'
import Footer from '../landing-page/Footer'

function Home() {
  return (
    <>
      <div className="flex flex-col sm:h-full  md:h-full 3xl:h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <Body/>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default Home