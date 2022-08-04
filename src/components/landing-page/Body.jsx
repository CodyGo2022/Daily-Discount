import React from 'react'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <>
      <div className='h-full flex items-center sm:px-3 items-start md:px-3 3xl:px-10'>
        <div className="grid grid-rows-2 grid-flow-col gap-2 w-full sm:grid-flow-row order-3 md:grid-flow-row order-3 order-3">
          {/* Heroes & Skins */}
          <div className="col-span-1">
            <div className="h-72 w-full sm:h-40 md:h-60 3xl:h-72">
              <Link to='/heroes-and-skins' className="flex flex-col justify-end h-full text-white-10 bg-heroes p-4 bg-cover bg-black bg-blend-overlay">
                <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Heroes & Skins</p>
              </Link>
            </div>
          </div>
          {/* Pricing */}
          <div className="col-span-1">
            <div className="h-72 w-full sm:h-40 md:h-60 3xl:h-72">
              <Link to='/pricing' className="flex flex-col justify-end h-full text-white-10 bg-pricing p-4 bg-cover bg-black bg-blend-overlay">
                <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Pricing</p>
              </Link>
            </div>
          </div>
          {/* Banner */}
          <div className="row-span-2 sm:order-first md:order-first">
            <div className="flex flex-col justify-end h-full text-white-10 bg-banner p-4 bg-cover bg-black bg-blend-overlay sm:h-40 md:h-60 3xl:h-full">
              <ul className="flex">
                {/* Registered Customer */}
                <li className='mr-10 sm:mr-3'>
                  <span className='text-3xl font-semibold sm:text-[20px]'>40+</span>
                  <p className='text-sm sm:text-xs w-[90px] md:text-sm 3xl:text-sm'>Registered Customer</p>
                </li>
                {/* Satisfied Customer */}
                <li className='mr-10 sm:mr-3'>
                  <span className='text-3xl font-semibold sm:text-[20px]'>30+</span>
                  <p className='text-sm sm:text-xs w-[90px] md:text-sm 3xl:text-sm'>Satisfied Customer</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body