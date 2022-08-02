import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import {IoAdd} from 'react-icons/io5'

function HeroesSkins() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-8 sm:px-3">
          {/* Banner */}
          <div className="h-60 w-full p-2 sm:px-0 py-2">
            <div className="flex flex-col justify-end h-full text-white-10 bg-heroes-1 p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <p>Heroes & Skins</p>
            </div>
          </div>
          {/* Content */}
          <div className="grid grid-cols-4 gap-4 p-2 sm:grid-cols-1 px-0 py-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Card */}
            <div className="bg-resale-skin bg-cover bg-black bg-blend-overlay bg-top flex flex-col justify-end h-56 p-4 sm:h-44">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className='text-sm text-white sm:text-xs'>Resale Skins</p>
                  <span className='text-sm font-semibold text-white sm:text-xs'>₱ 279.00</span>
                </div>
                <div>
                  <button className='bg-white rounded-full p-3 hover:bg-white-10'>
                    <IoAdd/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default HeroesSkins