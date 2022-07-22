import React from 'react'
import { Link } from 'react-router-dom'
import DailyDiscount from '../../img/DailyDiscount.svg'

function SignIn() {
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
            <h3 className='text-xl font-black text-black'>Sign In <br/> to continue</h3>
          </div>
          {/* Form */}
          <form action='#' className="h-full px-5 py-3">
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
            {/* Sign Up Button */}
            <div className="flex flex-col items-center mt-5">
              <button className='bg-blue w-full h-10 text-white text-sm mb-3'>Sign In</button>
              <span className='text-sm text-black'>Already have account? <Link to='/sign-up' className='text-black font-semibold'>Sign Up</Link></span>
            </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default SignIn