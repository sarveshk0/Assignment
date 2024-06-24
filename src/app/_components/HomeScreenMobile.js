'use client'
import React from 'react'
import SignIn from './SignIn'
import JoinMe from './JoinMe'
import { useState } from 'react'

const HomeScreenMobile = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleAuth = () => {
        setIsSignIn(!isSignIn);
      };
  return (
    <div className='container bg-[#f7f5f9] flex flex-col items-center'>
         <div className=' py-[32px] mt-2'>
         <p className="text-2xl  text-start px-10 ml-8  italic font-semibold">Explore your <span className="text-[#0096C8]">hobby</span> or <span className="text-[#8064A2]">passion</span> </p>
      
      <p className="text-sm font-thin text-[#1C171E] px-10 pt-4 ml-8 text-start">
        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
        suppliers, classes, workshops, and places to practice, participate or perform.
        outdoor activities…
        <br/>
       </p>
         </div>
     
         <div className='w-[350px]' onClick={toggleAuth}>
        {isSignIn ? <SignIn /> : <JoinMe />}
        <div className="mt-20 mb-0 ">
        <img src="/images/Group 27.png"  alt="" />
       </div>
      </div>


        
    </div>
  )
}

export default HomeScreenMobile