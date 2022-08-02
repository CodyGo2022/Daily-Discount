import React from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.svg'
import {GrCart} from 'react-icons/gr'
import { HiMenuAlt3 } from 'react-icons/hi'

function nav() {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center h-auto py-3 px-10 sm:px-2 md:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex-none">
          <Link to='/dashboard'>
            <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-24'/>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex-none sm:hidden">
          <ul className="flex list-none text-sm text-black">
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/dashboard'>Home</Link>
            </li>
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/user-heroes-and-skins'>Heroes & Skins</Link>
            </li>
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/user-pricing'>Pricing</Link>
            </li>
            <li className='px-5 hover:text-blue cursor-pointer'>
              <Link to='/user-order-details'>Order Details</Link>
            </li>
          </ul>
        </div>
        <section className='flex items-center'>
          {/* Buttons */}
          <div className="flex-none">
            <button className='text-sm mr-3 cursor-pointer w-6'><Link to='/user-cart'><GrCart/></Link></button>
            <Link className='bg-blue text-sm text-white py-2 px-4 sm:hidden' to='/profile'>Username</Link>
          </div>
          {/* Menu */}
          <div className='sm:visible md:hidden lg:hidden'>
            <div className="flex-none">
              <button className='p-1'>
                <HiMenuAlt3 className='text-xl'/>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default nav