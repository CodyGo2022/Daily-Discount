import React, { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import {MdOutlineDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'

function OrderCartProcess() {
  const [showModal, setShowModal] = useState(false)
  const [showVerification, setShowVerification] = useState(false)

  return (
    <>
      {/* Toggle Modal */}
      <button className='bg-blue w-28 h-8 text-white text-sm flex items-center justify-center' onClick={() => setShowModal(true)}>
        Order Now
      </button>
      {/* Cart Process 1 */}
      {showModal ? (
        <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-80'>
          <div className="relative flex justify-center w-[100vw]">
            {/* Card Content */}
            <div className='bg-white flex flex-col w-2/4 h-full text-black sm:w-11/12'>
              {/* Card Header */}
              <div className="flex flex-row justify-between text-black text-sm p-4">
                <section>
                  <h3 className="text-black text-md font-semibold sm:text-xs md:text-sm 3xl:text-sm">Order Information</h3>
                  <span className="text-black text-sm sm:text-xs md:text-sm 3xl:text-sm">Please fill the form to proceed checkout.</span>
                </section>
                <section>
                  <button className='bg-white rounded-full p-3 hover:bg-white-10' onClick={() => setShowModal(false)}>
                    <IoCloseOutline/>
                  </button>
                </section>
              </div>
              {/* Card Body */}
              <div className="flex flex-row">
                {/* Form */}
                <form action='#' className="h-full w-full p-4">
                  {/* In-game Name */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">In-game Name</span>
                    <input type="email" placeholder='in_game_name' name="" id="" className="mt-0 block w-full px-0 py-1 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" disabled/>
                  </label>
                  {/* User ID */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">User ID</span>
                    <input type="text" placeholder='in_game_id' name="" id="" className="mt-0 block w-full px-0 py-1 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" disabled/>
                  </label>
                  {/* Server ID */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Server ID</span>
                    <input type="text" placeholder='in_game_server' name="" id="" className="mt-0 block w-full px-0 py-1 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" disabled/>
                  </label>
                  {/* Payment Method */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Payment Method</span>
                    <span className="text-black text-xs ml-1 sm:text-xs md:text-sm 3xl:text-sm">(GCash, Paymaya)</span>
                    {/* <input type="text" placeholder='Select Payment Method' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm"/> */}
                    <select name="" id="" className="mt-0 block w-full px-0 py-1 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm">
                      <option value="Select Payment Method" disabled>Select Payment Method</option>
                      <option value="GCash">GCash</option>
                      <option value="Paymaya">Paymaya</option>
                    </select>
                  </label>
                  {/* Proof of Payment */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Proof of Payment</span>
                    {/* <input type="text" placeholder='Upload Receipt' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm"/> */}
                    <input type="file" name="" id="" className="mt-0 block w-full px-0 py-1 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm"/>
                  </label>
                  {/* Total Payment */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Total Payment</span>
                    <input type="text" placeholder='total' name="" id="" className="mt-0 block w-full px-0 py-1 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" disabled/>
                  </label>
                  {/* Next Process button */}
                  <button className='bg-blue text-sm h-8 w-28 text-white mt-3 sm:text-xs md:text-sm 3xl:text-sm' onClick={() => setShowModal(false) ?? setShowVerification(true)}>
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* Cart Process 2 */}
      {showVerification ? (
        <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-80'>
        <div className="relative flex justify-center w-[100vw]">
          {/* Card Content */}
          <div className='bg-white flex flex-col w-9/12 h-full text-black sm:w-11/12'>
            {/* Card Header */}
            <div className="flex flex-row justify-between text-black text-sm p-4">
              <section>
                <h3 className="text-black text-md font-semibold sm:text-xs md:text-sm 3xl:text-sm">Order Verification</h3>
                <span className="text-black text-sm sm:text-xs md:text-sm 3xl:text-sm">Please check if your information is correct.</span>
              </section>
              <section>
                <button className='bg-white rounded-full p-3 hover:bg-white-10' onClick={() => setShowVerification(false)}>
                  <IoCloseOutline/>
                </button>
              </section>
            </div>
            {/* Card Body */}
            <div className="flex flex-row">
              {/* Form */}
              <form action='#' className="h-full w-full p-4">
                {/* User Information */}
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
                  {/* User ID */}
                  <label className="block mb-3 sm:mb-1">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">User ID</span>
                    <p className="text-black text-xs sm:text-xs md:text-sm 3xl:text-sm">in_game_id</p>
                  </label>
                  {/* In-Game Name */}
                  <label className="block mb-3 sm:mb-1">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">In-Game Name</span>
                    <p className="text-black text-xs sm:text-xs md:text-sm 3xl:text-sm">in_game_name</p>
                  </label>
                  {/* Server ID */}
                  <label className="block mb-3 sm:mb-1">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Server ID</span>
                    <p className="text-black text-xs sm:text-xs md:text-sm 3xl:text-sm">in_game_server</p>
                  </label>
                  {/* Payment Method */}
                  <label className="block mb-3 sm:mb-1">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Payment Method</span>
                    <p className="text-black text-xs sm:text-xs md:text-sm 3xl:text-sm">payment_method</p>
                  </label>
                  {/* Proof of Payment */}
                  <label className="block mb-3 sm:mb-1">
                    <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Proof of Payment</span>
                    <p className="text-black text-xs sm:text-xs md:text-sm 3xl:text-sm">proof_of_payment</p>
                  </label>
                </div>
                {/* User Cart */}
                <div className="grid grid-cols-1 gap-2 mt-8">
                  <h3 className="text-black text-md font-semibold sm:text-xs md:text-sm 3xl:text-sm">Items</h3>
                  {/* Items */}
                  <div className="grid grid-row-1 gap-2">
                    <section className="w-full h-full bg-white flex items-center justify-between py-2">
                      <div className="flex flex-row items-center">
                        <span className='text-sm font-semibold sm:text-xs md:text-sm 3xl:text-sm'>name</span>
                      </div>
                      <ul className="flex justify-between items-center w-96 text-sm bg-white-200 sm:w-[150px] md:w-[240px] 3xl:w-96">
                        <li className='text-sm sm:text-xs text-center md:text-sm 3xl:text-sm'>price</li>
                        <li className='text-sm sm:text-xs text-center md:text-sm 3xl:text-sm'>Qty: <span className='text-sm font-semibold sm:text-xs text-center md:text-sm 3xl:text-sm'>quantity</span></li>
                        <li className='text-sm text-blue sm:text-xs text-center hidden md:hidden text-sm 3xl:block text-sm'>
                          <button className='bg-red w-28 h-8 text-white flex text-sm items-center justify-center'>
                            <MdOutlineDelete className='mr-1 w-5 h-full'/>
                            Delete
                          </button>
                        </li>
                        <li className='text-sm text-blue sm:text-xs text-center block md:block text-sm 3xl:hidden text-sm'>
                          <button className='bg-red rounded-full p-4.5 w-8 h-8 text-white flex text-sm text-center justify-center'>
                            <MdOutlineDelete className='w-[20px] h-full'/>
                          </button>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
                {/* Next Process button */}
                <button className='bg-white-20 text-sm h-8 w-28 text-black mt-3 mr-2 sm:text-xs md:text-sm 3xl:text-sm' onClick={() => setShowModal(true) ?? setShowVerification(false)}>
                  Back
                </button>
                <button className='bg-blue text-sm h-8 w-28 text-white mt-3 sm:text-xs md:text-sm 3xl:text-sm' onClick={() => setShowModal(false) ?? setShowVerification(false)}>
                  <Link to='/order-complete' className='block'>Next</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  )
}

export default OrderCartProcess