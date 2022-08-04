import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import {IoAdd} from 'react-icons/io5'

function HeroesSkins() {
  return (
    <>
      <div className="flex flex-col justify-between sm:h-full">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-10 sm:px-3 mb-20 md:px-3 3xl:px-10">
          {/* Banner */}
          <div className="h-60 w-full p-2 sm:h-40 p-0 md:h-60 3xl:h-60">
            <div className="flex flex-col justify-end h-full text-white-10 bg-heroes-1 p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Heroes & Skins</p>
            </div>
          </div>
          {/* Content */}
          <div className="grid grid-cols-4 gap-4 p-2 sm:grid-cols-1 px-0 py-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Card */}
            <div className="bg-resale-skin bg-cover bg-black bg-blend-overlay bg-top flex flex-col justify-end h-56 p-4 sm:h-36 md:h-40">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className='text-sm text-white sm:text-xs md:text-sm 3xl:text-sm'>Resale Skins</p>
                  <span className='text-sm font-semibold text-white sm:text-xs md:text-sm 3xl:text-sm'>₱ 279.00</span>
                </div>
                <div>
                  <button className='bg-white rounded-full p-3 hover:bg-white-10 sm:p-2 md:p-2'>
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