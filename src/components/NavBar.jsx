import React, { useState } from 'react'
import { Link } from 'react-scroll'

export const NavBar = () => {

  const [phoneNav, setPhoneNav] = useState(false);

  const handleClick = () => setPhoneNav(!phoneNav);

  return (
    <nav className='bg-white'>

      <div className='w-[87%] mx-auto max-w-[1280px]'>

        <div className='flex justify-between py-6 md:gap-5 md:items-center'>

          <h1 className='text-[#3b3054] text-3xl font-bold'>Shortly</h1>

          <div className='md:flex-1'>

            <button 
              className='text-[#bfbfbf] md:hidden'
              onClick={ handleClick }
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className='hidden md:flex justify-between font-bold items-center text-[#bfbfbf]'>

              <div className='space-x-4'>
                <Link 
                  className='hover:text-black cursor-pointer'
                  to="features" smooth={true} duration={500}
                >
                  Features
                </Link>
                <Link 
                  className='hover:text-black cursor-pointer'
                  to="features" smooth={true} duration={500}
                >
                  Pricing
                </Link>
                <Link 
                  className='hover:text-black cursor-pointer'
                  to="features" smooth={true} duration={500}
                >
                  Resources
                </Link>
              </div>

              <div className='space-x-4 items-center'>
                <Link className='hover:text-black cursor-pointer'
                  to="features" smooth={true} duration={500}
                >
                  Login
                </Link>
                <Link
                  className='bg-[#2acfcf] text-white rounded-2xl cursor-pointer py-2 px-7'
                  to="features" smooth={true} duration={500}
                >
                  Sign Up
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* Phone menu */}
        <div 
          className={
            phoneNav 
            ? 'bg-[#3b3054] text-white font-bold py-7 rounded-lg space-y-5 md:hidden absolute w-[86%] z-10'
            : 'hidden'
          }
        >

          <div className='flex flex-col items-center gap-5'>
            <Link
              to="features" smooth={true} duration={500}
            >
              Features
            </Link>
            <Link
              to="features" smooth={true} duration={500}
            >
              Pricing
            </Link>
            <Link
              to="features" smooth={true} duration={500}
            >
              Resources
            </Link>
          </div>

          <hr className='w-[80%] mx-auto' />

          <div className='flex flex-col items-center gap-5'>
            <Link to="features" smooth={true} duration={500}>
              Login
            </Link>
            <Link
              className='bg-[#2acfcf] w-[80%] text-center py-2 rounded-2xl'
              to="features" smooth={true} duration={500}
            >
              Sign Up
            </Link>
          </div>

        </div>

      </div>

    </nav>
  )
}
