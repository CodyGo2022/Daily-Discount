import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Profile() {
  return (
    <>
<div className="flex flex-col justify-between h-full">
        {/* Nav */}
        <Nav/>
        {/* Body */}
        <div className="container mx-auto flex flex-col h-full px-10 sm:px-3 mb-20 md:px-3 3xl:px-10">
          {/* Banner */}
          <div className="h-60 w-full p-2 sm:h-40 p-0 md:h-60 3xl:h-60">
            <div className="flex flex-row items-end justify-between h-full text-white-10 bg-pricing-1 p-4 bg-cover bg-black bg-blend-overlay bg-top">
              <h3 className='text-2xl font-bold text-white sm:text-xs md:text-sm 3xl:text-sm'>user_name</h3>
              <button className='bg-blue text-sm h-8 w-24 text-white sm:text-xs h-6 w-16 md:text-sm 3xl:text-sm'>edit</button>
            </div>
          </div>
          {/* Skin Content */}
          <section>
            <div className="grid grid-cols-2 gap-4 p-2 sm:grid-cols-1 px-0 py-2 md:grid-cols-1 3xl:grid-cols-2">
              {/* Card */}
              <div className="bg-white h-full flex flex-row justify-between p-4">
                {/* Profile section */}
                <div className="flex flex-col">
                  <h6 className='p-2 text-sm font-semibold sm:text-xs md:text-sm 3xl:text-sm'>Profile Information</h6>
                  <section className='p-2'>
                    <ul>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold sm:text-xs md:text-sm 3xl:text-sm'>Full Name</span>
                        <h3 className="text-sm text-black sm:text-xs md:text-sm 3xl:text-sm">last_name, first_name</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold sm:text-xs md:text-sm 3xl:text-sm'>Email</span>
                        <h3 className="text-sm text-black sm:text-xs md:text-sm 3xl:text-sm">email</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold sm:text-xs md:text-sm 3xl:text-sm'>Phone Number</span>
                        <h3 className="text-sm text-black sm:text-xs md:text-sm 3xl:text-sm">phone_number</h3>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>

              <div className="bg-white h-full flex flex-row justify-between p-4">
                {/* In-game profile section */}
                <div className="flex flex-col">
                  <h6 className='p-2 text-sm font-semibold sm:text-xs md:text-sm 3xl:text-sm'>In-game Profile Information</h6>
                  <section className='p-2'>
                    <ul>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold sm:text-xs md:text-sm 3xl:text-sm'>In-game Name</span>
                        <h3 className="text-sm text-black sm:text-xs md:text-sm 3xl:text-sm">in_game_name</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold sm:text-xs md:text-sm 3xl:text-sm'>User ID</span>
                        <h3 className="text-sm text-black sm:text-xs md:text-sm 3xl:text-sm">in_game_id</h3>
                      </li>
                      <li className='mb-4'>
                        <span className='text-xs text-black font-semibold sm:text-xs md:text-sm 3xl:text-sm'>Server ID</span>
                        <h3 className="text-sm text-black sm:text-xs md:text-sm 3xl:text-sm">in_game_server</h3>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Profile