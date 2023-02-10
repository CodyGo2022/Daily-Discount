import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Link } from 'react-router-dom'

import {GiPartyPopper} from 'react-icons/gi'

function OrderCemplete() {
  return (
    <>
      <div className="flex flex-col justify-beteen h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col justify-center items-center h-screen px-10 sm:px-3 mb-20 md:px-3 3xl:px-10">
          <div className="bg-white flex items-center justify-center h-[400px] p-4 sm:h-[330px] w-auto">
            <div className="flex flex-col items-center justify-between h-[280px] sm:h-[250px]">
              <GiPartyPopper className='text-[70px] sm:text-[50px] md:text-[50px] 3xl-[70px]'/>
              <section className='flex flex-col items-center'>
                <h3 className='text-xl text-center w-80 font-bold sm:text-md'>Thank you for availing! Please wait for your items to receive.</h3>
                <span className='text-sm sm:text-xs'>This will take 5 - 10 mins.</span>
              </section>
              <button className='bg-blue text-sm h-8 w-28 text-white sm:text-xs md:text-sm 3xl:text-sm'>
                <Link to='/dashboard' className='block'>Continue</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCemplete