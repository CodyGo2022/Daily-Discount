import React from 'react'
import Nav from './Nav'
import {BsArrowUpRightCircle} from 'react-icons/bs'

function OrderDetails() {
  return (
    <>
      <div className="flex flex-col justify-between h-full">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-10 sm:px-3 mb-20 md:px-3 3xl:px-10">
          {/* Banner */}
          <div className="h-60 w-full p-2 sm:h-40 p-0 pt-8 md:h-60 3xl:h-60">
            <div className="flex flex-col justify-end h-full text-white-10 bg-order-details p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <p className='text-sm sm:text-xs md:text-sm 3xl:text-sm'>Order Details</p>
            </div>
          </div>
          {/* Order Details Content */}
          <div className="grid grid-rows-1 grid-flow-row gap-2 pt-2 sm:grid-cols-1">
            {/* Card Content */}
            <button className="row-span-1 w-full bg-white flex items-center justify-between p-4">
              <div className="flex flex-row items-center">
                <span className='text-sm font-semibold ml-2 sm:ml-0 text-xs'>Transaction Number</span>
              </div>
              <ul className="flex justify-between text-sm sm:hidden md:hidden">
                <li className='text-sm pl-6'>amount</li>
                <li className='text-sm pl-6'>order_date</li>
                <li className='text-sm pl-6'>status</li>
                <li>
                  <button className='bg-white rounded-full p-0 hover:bg-white-10 sm:block p-1 md:block p-2 3xl:hidden'>
                    <BsArrowUpRightCircle/>
                  </button>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails