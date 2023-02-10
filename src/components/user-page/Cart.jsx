import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Link } from 'react-router-dom'

import {MdOutlineDelete} from 'react-icons/md'
import OrderCartProcess from './OrderCartProcess'

function Cart() {
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-10 sm:px-3 mb-20 md:px-3 3xl:px-10">
          {/* Welcome greetings */}
          <div className="flex flex-col w-full h-28 justify-center p-2 sm:h-[100%] py-8 md:h-[100%] 3xl:h-[100%]">
            <h3 className='text-xl font-bold text-black sm:text-xs md:text-md 3xl:text-xl'>My Cart</h3>
            <p className='text-sm text-black sm:text-xs md:text-sm 3xl:text-sm'>You have added 1 items to your cart.</p>
          </div>
          {/* Order Details Content */}
          <div className="w-full mb-3 sm:h-[100%] p-0 md:h-[100%] 3xl:h-[100%]">
            <div className="w-full p-4 h-full bg-white flex items-center justify-between p-4">
              <div className='flex items-center'>
                <input type="checkbox" name="" id="" className='mr-5' />
                <div className="flex flex-row items-center">
                  <span className='text-sm font-semibold sm:text-xs md:text-sm 3xl:text-sm'>name</span>
                </div>
              </div>
              <ul className="flex justify-between items-center w-8 text-sm sm:w-[150px] md:w-[240px] 3xl:w-[150px]">
                <li className='text-sm sm:text-xs text-center md:text-sm 3xl:text-sm'>price</li>
                <li className='text-sm sm:text-xs text-center md:text-sm 3xl:text-sm'><span className='text-sm font-semibold sm:text-xs text-center md:text-sm 3xl:text-sm'>quantity</span></li>
                <li className='text-sm text-blue sm:text-xs text-center block md:block text-sm 3xl:hidden text-sm'>
                  <button className='bg-red rounded-full p-4.5 w-8 h-8 text-white flex text-sm text-center justify-center'>
                    <MdOutlineDelete className='w-[20px] h-full'/>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Order Details Content */}
          <div>
            <OrderCartProcess/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart