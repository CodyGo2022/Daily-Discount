import React, { useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
// import {FaAsterisk} from 'react-icons/fa'

function OrderInformationModal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Toggle Modal */}
      <button className='bg-blue w-28 h-8 text-white text-sm flex items-center justify-center' onClick={() => setShowModal(true)}>
        Order Now
      </button>
      {/* Card Modal */}
      {showModal ? (
        <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-80'>
          <div className="relative flex justify-center w-[100vw]">
            {/* Card Content */}
            <div className='bg-white flex flex-col w-9/12 h-full text-black'>
              {/* Card Header */}
              <div className="flex flex-row justify-between text-black text-sm p-4">
                <section>
                  <h3 className="text-black text-md font-semibold">Order Information</h3>
                  <span className="text-black text-sm">Please fill the form to proceed checkout.</span>
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
                  {/* Facebook Name */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">Facebook Name</span>
                    <input type="text" placeholder='Juan Dela Cruz' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* In-game Name */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">In-game Name</span>
                    <input type="email" placeholder='MoonKnight' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* User ID */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">User ID</span>
                    <input type="text" placeholder='95034790' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* Server ID */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">Server ID</span>
                    <input type="text" placeholder='3222' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* Payment Method */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">Payment Method</span>
                    <span className="text-black text-xs ml-1">(GCash, Paymaya)</span>
                    <input type="text" placeholder='Select Payment Method' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* Proof of Payment */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">Proof of Payment</span>
                    <input type="text" placeholder='Upload Receipt' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* Total Payment */}
                  <label className="block mb-3">
                    <span className="text-black text-xs font-semibold">Total Payment</span>
                    <input type="text" placeholder='Php xxx.xx' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" required/>
                  </label>
                  {/* Next Process button */}
                  <button className='bg-blue text-sm h-8 w-28 text-white mt-3'>
                    Next
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

export default OrderInformationModal