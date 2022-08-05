import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.png'
import {GrCart} from 'react-icons/gr'

import {IoCloseOutline} from 'react-icons/io5'
import { HiMenuAlt3 } from 'react-icons/hi'

function Nav() {
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <>
      <div className="container mx-auto flex justify-between items-center h-auto py-3 px-10 sm:px-3 md:px-3 3xl:px-10">
        {/* Logo */}
        <div className="flex-none">
          <Link to='/dashboard'>
            <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-26 md:w-24 3xl:w-32'/>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex-none sm:hidden md:hidden 3xl:block">
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
          <div className="flex-none sm:block md:block 3xl:block">
            <button className='text-sm mr-3 cursor-pointer w-6 sm:mr-2'><Link to='/user-cart'><GrCart/></Link></button>
            <Link className='bg-blue text-sm text-white py-2 px-4 sm:hidden md:hidden' to='/profile'>Username</Link>
          </div>
          {/* Menu */}
          <div className='sm:block md:block 3xl:hidden'>
            <div className="flex-none">
              <button className='p-1'>
                <HiMenuAlt3 className='text-xl' onClick={() => setShowSideNav(true)}/>
              </button>
              {/* Side Nav Modal */}
              {showSideNav ? (
                <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-80'>
                  <div className="relative flex justify-end w-[100vw] h-[100%]">
                    {/* Nav Content */}
                    <div className='bg-white flex flex-col w-[10vw] h-full text-black sm:w-[100vw] md:w-[40vw]'>
                      {/* Nav Header */}
                      <div className="flex flex-row items-center h-auto text-black text-sm p-3 sm:justify-end md:justify-end">
                        {/* <Link to='/'>
                          <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-26 block md:w-24 block'/>
                        </Link> */}
                        <button className='bg-white rounded-full p-1' onClick={() => setShowSideNav(false)}>
                          <IoCloseOutline className='text-2xl font-bold'/>
                        </button>
                      </div>
                      {/* Nav List */}
                      <div className="flex flex-row">
                        <ul className="flex flex-col items-start justify-between list-none text-sm text-black w-[100%] h-[90vh]">
                          <li>
                            <li className='px-5 mt-4 hover:text-blue cursor-pointer'>
                              {/* <Link className='bg-blue text-sm text-white py-2 px-4' to='/profile'>Username</Link> */}
                              <Link to='/profile'>Profile</Link>
                            </li>
                            <li className='px-5 mt-4 hover:text-blue cursor-pointer'>
                              <Link to='/dashboard'>Home</Link>
                            </li>
                            <li className='px-5 mt-4 hover:text-blue cursor-pointer'>
                              <Link to='/user-heroes-and-skins'>Heroes & Skins</Link>
                            </li>
                            <li className='px-5 mt-4 hover:text-blue cursor-pointer'>
                              <Link to='/user-pricing'>Pricing</Link>
                            </li>
                            <li className='px-5 mt-4 hover:text-blue cursor-pointer'>
                              <Link to='/user-order-details'>Order Details</Link>
                            </li>
                          </li>
                          <li>
                            <li className='px-3 mt-4 hover:text-blue cursor-pointer'>
                              <button className='bg-blue mt-2 text-sm text-white py-2 px-4'>
                                <Link to='/sign-up'>Sign Out</Link>
                              </button>
                            </li>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Nav