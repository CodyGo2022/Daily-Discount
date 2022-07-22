import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Link } from 'react-router-dom'

import {MdOutlineDelete} from 'react-icons/md'
import OrderInformationModal from './OrderInformationModal'

function Cart() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-8">
          {/* Welcome greetings */}
          <div className="flex flex-col w-full h-28 justify-center p-2">
            <h3 className='text-xl font-bold text-black'>My Cart</h3>
            <p className='text-sm text-black'>You have added 1 items to your cart.</p>
          </div>
          {/* Order Details Content */}
          <div className="w-full p-2">
            <div className="w-full h-full bg-white flex items-center justify-between p-4">
              <div className="flex flex-row items-center">
                <span className='text-sm font-semibold'>Vexana - Sanguine Rose</span>
              </div>
              <ul className="flex justify-between items-center w-96 text-sm">
                <li className='text-sm'>₱ 479.00</li>
                <li className='text-sm'>Qty: <span className='text-sm font-semibold'>x1</span></li>
                <li className='text-sm text-blue'>
                  <button className='bg-red w-28 h-8 text-white flex text-sm items-center justify-center'>
                    <MdOutlineDelete className='mr-1 w-5 h-full'/>
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Order Details Content */}
          <div className="p-2 mt-8">
            <OrderInformationModal/>
          </div>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default Cart