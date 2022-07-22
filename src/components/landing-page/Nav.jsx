import React from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.svg'

function nav() {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center h-auto py-3 px-10">
        {/* Logo */}
        <div className="flex-none">
          <Link to='/'>
            <img src={DailyDiscount} alt="Daily Discount" className='w-32'/>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex-none">
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
        <div className="flex-none">
          <button className='text-sm mr-3 hover:text-blue cursor-pointer'>
            <Link to='/sign-in'>Sign In</Link>
          </button>
          <button className='bg-blue text-sm h-8 w-28 text-white'>
            <Link to='/sign-up'>Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default nav