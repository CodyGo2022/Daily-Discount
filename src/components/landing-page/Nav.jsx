import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.png'

import {IoCloseOutline} from 'react-icons/io5'
import { HiMenuAlt3, HiArrowRight } from 'react-icons/hi'

function Nav() {
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <>
      <div className="container mx-auto flex justify-between items-center h-auto py-3 px-10 sm:px-3 md:px-3 3xl:px-10">
        {/* Logo */}
        <div className="flex-none">
          <Link to='/'>
            <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-26 md:w-24 3xl:w-32'/>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="flex-none sm:hidden md:hidden 3xl:block">
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
        <div className="flex-none sm:hidden md:hidden 3xl:block">
          <button className='text-sm mr-3 hover:text-blue cursor-pointer'>
            <Link to='/sign-in'>Sign In</Link>
          </button>
          <button className='bg-blue text-sm text-white py-2 px-4'>
            <Link to='/sign-up'>Sign Up</Link>
          </button>
        </div>
        {/* Menu */}
        <div className='sm:block md:block 3xl:hidden'>
          <div className="flex-none">
            <button className='p-1'>
              <HiMenuAlt3 className='text-2xl' onClick={() => setShowSideNav(true)}/>
            </button>
            {/* Side Nav Modal */}
            {showSideNav ? (
              <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-80'>
                <div className="relative flex justify-end w-[100vw] h-[100vh]">
                  {/* Nav Content */}
                  <div className='bg-white flex flex-col w-[10vw] h-full text-black sm:w-[100vw] md:w-[40vw]'>
                    {/* Nav Header */}
                    <div className="flex flex-row items-center h-auto text-black text-sm p-3 sm:justify-between md:justify-end">
                      <Link to='/'>
                        <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-26 block md:w-24 hidden'/>
                      </Link>
                      <button className='bg-white rounded-full p-1' onClick={() => setShowSideNav(false)}>
                        <IoCloseOutline className='text-2xl font-bold'/>
                      </button>
                    </div>
                    {/* Nav List */}
                    <div className="flex flex-row">
                      <ul className="flex flex-col items-center list-none text-sm text-black w-[100%] h-[90vh]">
                        <li className='w-full'>
                          <li className='mt-4 px-5 hover:text-blue cursor-pointer'>
                            <Link to='/'>Home</Link>
                          </li>
                          <li className='mt-4 px-5 hover:text-blue cursor-pointer'>
                            <Link to='/heroes-and-skins'>Heroes & Skins</Link>
                          </li>
                          <li className='mt-4 px-5 hover:text-blue cursor-pointer'>
                            <Link to='/pricing'>Pricing</Link>
                          </li>
                        </li>
                        <li className='w-full'>
                          <li className='px-3 flex flex-col items-start hover:text-blue cursor-pointer'>
                            <button className='text-sm mt-4 px-2 hover:text-blue cursor-pointer'>
                              <Link to='/sign-in'>Sign In</Link>
                            </button>
                            <button className='text-sm mt-4 p-2 text-white flex items-center justify-between bg-blue'>
                              <Link to='/sign-up'>Sign Up</Link>
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
      </div>
    </>
  )
}

export default Nav