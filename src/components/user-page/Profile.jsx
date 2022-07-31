import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Profile() {
  return (
    <>
<div className="flex flex-col justify-between h-screen">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-8">
          {/* Banner */}
          <div className="h-60 w-full p-2">
            <div className="flex flex-row items-end justify-between h-full text-white-10 bg-pricing-1 p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <h3 className='text-2xl font-bold text-white'>Username.</h3>
              <button className='bg-blue text-sm h-8 w-24 text-white'>edit</button>
            </div>
          </div>
          {/* Skin Content */}
          <section>
            <div className="grid grid-cols-2 gap-4 p-2">
              {/* Card */}
              <div className="bg-white h-full flex flex-row justify-between p-4">
                {/* Profile section */}
                <div className="flex flex-col">
                  <h6 className='p-2 text-sm font-semibold'>Profile Information</h6>
                  <section className='p-2'>
                    <ul>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold'>Full Name</span>
                        <h3 className="text-sm text-black">Juan Dela Cruz</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold'>Email</span>
                        <h3 className="text-sm text-black">juandelacruz@email.com</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold'>Phone Number</span>
                        <h3 className="text-sm text-black">09XXXXXXXXX</h3>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>

              <div className="bg-white h-full flex flex-row justify-between p-4">
                {/* In-game profile section */}
                <div className="flex flex-col">
                  <h6 className='p-2 text-sm font-semibold'>In-game Profile Information</h6>
                  <section className='p-2'>
                    <ul>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold'>In-game Name</span>
                        <h3 className="text-sm text-black">MoonKnight</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold'>User ID</span>
                        <h3 className="text-sm text-black">95034790</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold'>Server ID</span>
                        <h3 className="text-sm text-black">3222</h3>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default Profile