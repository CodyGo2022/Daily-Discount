import React from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.png'

function SignUp() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="container flex flex-col w-2/6 bg-white sm:w-11/12 md:w-10/12 3xl:w-1/3">
          {/* Logo */}
          <div className="flex items-center px-5 py-3">
            <Link to='/'>
              <img src={DailyDiscount} alt="Daily Discount" className='w-32 sm:w-26 md:w-24 3xl:w-32'/>
            </Link>
          </div>
          {/* Heading */}
          <div className="flex items-center px-5 py-3">
            {/* Greeting */}
            <h3 className='text-xl font-black text-black sm:text-md'>Sign Up <br/> to continue</h3>
          </div>
          {/* Form */}
          <form action='#' className="h-full px-5 py-3">
            {/* Full Name */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Full Name</span>
              <input type="text" placeholder='Juan Dela Cruz' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
            </label>
            {/* Email */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Email</span>
              <input type="email" placeholder='juandelacruz@email.com' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
            </label>
            {/* Phone Number */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Phone Number</span>
              <input type="text" placeholder='09XX XXX XXXX' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
            </label>
            {/* Username */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Username</span>
              <input type="text" placeholder='MoonKnight' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
            </label>
            {/* Password */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Password</span>
              <input type="password" placeholder='••••••' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
            </label>
            {/* Confirm Password */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold sm:text-xs md:text-sm 3xl:text-sm">Confirm Password</span>
              <input type="password" placeholder='••••••' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm sm:text-xs md:text-sm 3xl:text-sm" />
            </label>
            {/* Sign Up Button */}
            <div className="flex flex-col items-center mt-5">
              <button className='bg-blue w-full h-10 text-white text-sm mb-3 sm:text-xs md:text-sm 3xl:text-sm'>Sign Up</button>
              <span className='text-sm text-black sm:text-xs md:text-sm 3xl:text-sm'>Already have account? <Link to='/sign-in' className='text-black font-semibold'>Sign In</Link></span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp