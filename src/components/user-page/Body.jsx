import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <>
      <div className='h-full flex items-center sm:items-start px-3 mb-16 md:px-3 py-3 3xl:px-10 py-5'>
        <div className="grid grid-flow-row auto-row-max gap-2 w-full sm:grid-flow-row">
          {/* Welcome greetings */}
          <div className="col-span-1">
            <div className="h-60 w-full sm:h-[100%] md:h-[100%] 3xl:h-[100%]">
              <span className='text-sm text-black sm:text-xs'>Welcome back!</span>
              <h3 className='text-3xl font-bold text-black sm:text-[18px] leading-7'>Username.</h3>
            </div>
          </div>
          {/* Heroes & Skins */}
          <div className="col-span-1 h-full">
            <div className="h-60 w-full sm:h-40 md:h-60 3xl:h-72">
              <Link to='/user-heroes-and-skins' className="flex flex-col justify-end h-full text-white-10 bg-heroes-1 p-4 bg-cover bg-center bg-black bg-blend-overlay">
                <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Heroes & Skins</p>
              </Link>
            </div>
          </div>
          {/* Pricing */}
          <div className="col-span-1 h-full">
            <div className="h-60 w-full sm:h-40 md:h-60 3xl:h-72">
              <Link to='/user-pricing' className="flex flex-col justify-end h-full text-white-10 bg-pricing p-4 bg-cover bg-top bg-black bg-blend-overlay">
                <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Pricing</p>
              </Link>
            </div>
          </div>
          {/* Order Details */}
          <div className="col-span-1 h-full">
            <div className="h-60 w-full sm:h-40 md:h-60 3xl:h-72">
              <Link to='/user-order-details' className="flex flex-col justify-end h-full text-white-10 bg-order-details p-4 bg-cover bg-center bg-black bg-blend-overlay">
                <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Order Details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body