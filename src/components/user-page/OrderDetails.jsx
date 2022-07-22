import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function OrderDetails() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-8">
          {/* Banner */}
          <div className="h-60 w-full p-2">
            <div className="flex flex-col justify-end h-full text-white-10 bg-order-details p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <p>Order Details</p>
            </div>
          </div>
          {/* Order Details Content */}
          <div className="w-full p-2">
            <div className="w-full h-full bg-white flex items-center justify-between p-4">
              <div className="flex flex-row items-center">
                <span className='text-sm font-semibold ml-2'>Vexana - Sanguine Rose</span>
              </div>
              <ul className="flex justify-between w-2/5 text-sm">
                <li className='text-sm'>₱ 479.00</li>
                <li className='text-sm'>July 4, 2022</li>
                <li className='text-sm'>Pending</li>
                <li className='text-sm underline text-blue'>Edit</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default OrderDetails