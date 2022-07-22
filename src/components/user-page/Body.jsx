import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <>
      <div className='h-full flex flex-col items-center'>
        <div className="container mx-auto flex flex-col justify-between px-8">
          {/* Welcome greetings */}
          <div className="flex flex-col w-full h-28 justify-center p-2">
            <span className='text-sm text-black'>Welcome back!</span>
            <h3 className='text-3xl font-bold text-black'>Username.</h3>
          </div>
          {/* Links */}
          <div className="flex-none w-full">
            <div className="h-60 w-full h-full p-2">
              <Link to='/user-heroes-and-skins' className="flex flex-col justify-end h-full text-white-10 bg-heroes-1 p-4 bg-cover bg-black bg-blend-overlay">
                <p>Heroes & Skins</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="h-60 w-full p-2">
              <Link to='/user-pricing' className="flex flex-col justify-end h-full text-white-10 bg-pricing p-4 bg-cover bg-black bg-blend-overlay">
                <p>Pricing</p>
              </Link>
            </div>
            <div className="h-60 w-full p-2">
              <Link to='/user-order-details' className="flex flex-col justify-end h-full text-white-10 bg-order-details p-4 bg-cover bg-black bg-blend-overlay">
                <p>Order Details</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body