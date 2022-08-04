import React from 'react'

import Nav from '../landing-page/Nav'
import Body from '../landing-page/Body'
import Footer from '../landing-page/Footer'

function Home() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen sm:h-screen md:h-screen 3xl:h-screen">
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