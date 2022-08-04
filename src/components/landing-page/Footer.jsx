import React from 'react'
// import {FaFacebook, } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="bg-white-20 fixed bottom-0 sm:w-full md:w-[100vw] 3xl:w-[100vw]">
        <div className="container mx-auto flex justify-between items-center py-3 px-10 h-16 sm:px-3 h-12 md:px-3 h-16 3xl:h-16">
          {/* Copyright */}
          <div className="flex-one text-sm sm:text-[12px]">
            © 2022, Daily Discount
          </div>
          {/* Social Links */}
          <div className="flex-none">
            <ul className="flex flex-none text-sm">
              <li className='flex items-center'>
                <a href="#" className="pl-2 sm:text-xs sm:text-[12px]">
                  {/* <FaFacebook/> */}
                  {/* Daily Discount */}
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer