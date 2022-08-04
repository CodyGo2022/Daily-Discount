import React from 'react'

import Nav from '../landing-page/Nav'
import Body from '../landing-page/Body'
import Footer from '../landing-page/Footer'

function Home() {
  return (
    <>
      <div className="flex flex-col justify-evenly sm:h-full md:h-full 3xl:h-full">
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