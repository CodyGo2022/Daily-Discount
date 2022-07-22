import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <>
      <div className='h-full flex items-center'>
        <div className="container mx-auto flex justify-between px-8">
          {/* Links */}
          <div className="flex-none w-1/2">
            <div className="flex flex-col">
              <div className="h-72 w-full h-full p-2">
                <Link to='/heroes-and-skins' className="flex flex-col justify-end h-full text-white-10 bg-heroes p-4 bg-cover bg-black bg-blend-overlay">
                  <p>Heroes & Skins</p>
                </Link>
              </div>
              <div className="h-72 w-full p-2">
                <Link to='/pricing' className="flex flex-col justify-end h-full text-white-10 bg-pricing p-4 bg-cover bg-black bg-blend-overlay">
                  <p>Pricing</p>
                </Link>
              </div>
            </div>
          </div>
          {/* Banner */}
          <div className="flex-none w-1/2">
            <div className="h-full w-full p-2">
              <div className="flex flex-col justify-end h-full text-white-10 bg-banner p-4 bg-cover bg-black bg-blend-overlay">
                <ul className="flex">
                  {/* Registered Customer */}
                  <li className='mr-10'>
                    <span className='text-3xl font-semibold'>40+</span>
                    <p className='text-sm'>Registered Customer</p>
                  </li>
                  {/* Satisfied Customer */}
                  <li className='mr-10'>
                    <span className='text-3xl font-semibold'>30+</span>
                    <p className='text-sm'>Satisfied Customer</p>
                  </li>
                  {/* Discount */}
                  {/* <li className='mr-10'>
                    <span className='text-3xl font-semibold'>10%</span>
                    <p className='text-sm'>Discount</p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body