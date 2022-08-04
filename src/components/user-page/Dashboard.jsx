import React from 'react'
import Nav from '../user-page/Nav'
import Body from '../user-page/Body'
import Footer from '../user-page/Footer'

function Dashboard() {
  return (
    <>
      <div className="flex flex-col justify-between sm:h-full md:h-full 3xl:h-full">
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

export default Dashboard