import React from 'react'
import Footer from '../landing-page/Footer'
import Nav from '../landing-page/Nav'

import {IoDiamondOutline, IoGiftOutline} from 'react-icons/io5'

function Pricing() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-8">
          {/* Banner */}
          <div className="h-60 w-full p-2">
            <div className="flex flex-col justify-end h-full text-white-10 bg-pricing-1 p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <p>Pricing</p>
            </div>
          </div>
          {/* Skin Content */}
          <section>
            <h6 className='p-2 text-sm font-semibold'>Price Coversion</h6>
            <div class="grid grid-cols-4 gap-4 p-2">
              {/* Card */}
              <div className="bg-white h-full flex items-center justify-between p-4">
                <div className="flex flex-row items-center">
                  <IoDiamondOutline className=''/>
                  <span className='text-sm font-semibold ml-2'>172</span>
                </div>
                <span className='text-sm'>₱ 135.00</span>
              </div>
            </div>
          </section>
          {/* Bundle Content */}
          <section>
            <h6 className='p-2 text-sm font-semibold'>Battle Pass</h6>
            <div class="grid grid-cols-4 gap-4 p-2">
              {/* Card */}
              <div className="bg-white h-full flex items-center justify-between p-4">
                <div className="flex flex-row items-center">
                  <IoGiftOutline/>
                  <span className='text-sm font-semibold ml-2'>Starlight</span>
                </div>
                <span className='text-sm'>₱ 451.00</span>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default Pricing