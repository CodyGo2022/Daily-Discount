import React from 'react'
import { Link } from 'react-router-dom'
import {IoAdd} from 'react-icons/io5'

function Body() {
  return (
    <>
      <div className='h-full flex items-center sm:items-start px-3 md:px-3 py-3 3xl:px-10 py-5'>
        <div className="grid grid-flow-row auto-row-max gap-7 w-full sm:grid-flow-row">
          {/* Welcome greetings */}
          <div className="col-span-1 mb-5">
            <div className="w-full sm:h-[100%] md:h-[100%] 3xl:h-[100%]">
              <span className='text-sm text-black sm:text-xs'>Good Morning!</span>
              <h3 className='text-4xl font-bold text-black mb-2 sm:text-[18px] leading-7'>Username.</h3>
            </div>
          </div>
          {/* Heroes & Skins */}
          <div className="col-span-1">
            <div className='flex justify-between'>
              <h3 className='font-semibold'>Hot Deals</h3>
              <Link to='/user-heroes-and-skins' className="text-sm py-2 px-4 bg-white-20">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-4 grid-flow-row gap-2">
              {/* Card */}
              <div className="bg-resale-skin bg-cover bg-black bg-blend-overlay bg-top flex flex-col justify-end h-56 p-4 sm:h-36 md:h-40">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className='text-sm text-white sm:text-xs md:text-sm 3xl:text-sm'>Resale Skins</p>
                    <span className='text-sm font-semibold text-white sm:text-xs md:text-sm 3xl:text-sm'>₱ 279.00</span>
                  </div>
                  <div>
                    <button className='bg-white rounded-full p-3 hover:bg-white-10 sm:p-2 md:p-2'>
                      <IoAdd/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Purchase History */}
          <div className="col-span-1">
            <div className='flex justify-between'>
              <h3 className='font-semibold'>Purchase History</h3>
              <Link to='/user-order-details' className="text-sm py-2 px-4 bg-white-20">
                View all
              </Link>
            </div>
            <div className="grid grid-cols-4 grid-flow-row gap-2">
              {/* Card */}
              <button className="flex flex-col justify-end bg-white h-full p-4 sm:h-36 md:h-40">
                <div className="flex flex-row justify-between items-center">
                  <div className='text-left'>
                    <span className='text-sm font-semibold text-black sm:text-xs md:text-sm 3xl:text-sm'>Transaction Number</span>
                    <p className='text-sm text-black sm:text-xs md:text-sm 3xl:text-sm'>skin</p>
                    <p className='text-sm text-black sm:text-xs md:text-sm 3xl:text-sm'>order_date</p>
                    <p className='text-sm text-black sm:text-xs md:text-sm 3xl:text-sm'>status</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body