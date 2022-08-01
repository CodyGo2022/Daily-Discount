import React from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.svg'

import { HiMenuAlt3 } from 'react-icons/hi'

function nav() {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center h-auto py-3 px-10 sm:px-2 md:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex-none">
          <Link to='/'>
            <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-28'/>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex-none sm:hidden">
          <ul className="flex list-none text-sm text-black">
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/'>Home</Link>
            </li>
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/heroes-and-skins'>Heroes & Skins</Link>
            </li>
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/pricing'>Pricing</Link>
            </li>
          </ul>
        </div>
        {/* Buttons */}
        <div className="flex-none sm:hidden">
          <button className='text-sm mr-3 hover:text-blue cursor-pointer'>
            <Link to='/sign-in'>Sign In</Link>
          </button>
          <button className='bg-blue text-sm text-white py-2 px-4'>
            <Link to='/sign-up'>Sign Up</Link>
          </button>
        </div>
        {/* Menu */}
        <div className='sm:visible md:hidden lg:hidden'>
          <div className="flex-none">
            <button className='p-1'>
              <HiMenuAlt3 className='text-lg'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default nav