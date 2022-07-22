import React from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.svg'

function SignUp() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="container flex flex-col w-2/6 bg-white">
          {/* Logo */}
          <div className="flex items-center px-5 py-3">
            <Link to='/'>
              <img src={DailyDiscount} alt="Daily Discount" className='w-32'/>
            </Link>
          </div>
          {/* Heading */}
          <div className="flex items-center px-5 py-3">
            {/* Greeting */}
            <h3 className='text-xl font-black text-black'>Sign Up <br/> to continue</h3>
          </div>
          {/* Form */}
          <form action='#' className="h-full px-5 py-3">
            {/* Full Name */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold">Full Name</span>
              <input type="text" placeholder='Juan Dela Cruz' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" />
            </label>
            {/* Email */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold">Email</span>
              <input type="email" placeholder='juandelacruz@email.com' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" />
            </label>
            {/* Phone Number */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold">Phone Number</span>
              <input type="text" placeholder='09XX XXX XXXX' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" />
            </label>
            {/* Username */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold">Username</span>
              <input type="text" placeholder='MoonKnight' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" />
            </label>
            {/* Password */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold">Password</span>
              <input type="password" placeholder='••••••' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" />
            </label>
            {/* Confirm Password */}
            <label className="block mb-3">
              <span className="text-black text-xs font-semibold">Confirm Password</span>
              <input type="password" placeholder='••••••' name="" id="" className="mt-0 block w-full px-0 5 border-0 border-b-2 border-white-20 focus:ring-0 focus:border-black text-sm" />
            </label>
            {/* Sign Up Button */}
            <div className="flex flex-col items-center mt-5">
              <button className='bg-blue w-full h-10 text-white text-sm mb-3'>Sign Up</button>
              <span className='text-sm text-black'>Already have account? <Link to='/sign-in' className='text-black font-semibold'>Sign In</Link></span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp