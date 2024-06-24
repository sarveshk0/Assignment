'use client'
import React, { useState } from 'react'

import SignIn from './SignIn'
import JoinMe from './JoinMe'
const HomeScreen = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleAuth = () => {
        setIsSignIn(!isSignIn);
      };
    
  return (
    <div className="homescreen container  bg-[#f7f5f9] ">
    <div  className="  flex flex-row container  items-center justify-between gap-12  pl-[100px] min-sm ">
      
      <div className="left leading-8 pt-20 " >
      <p className="text-4xl  text-left italic font-semibold">Explore your <span className="text-[#0096C8]">hobby</span> or <span className="text-[#8064A2]">passion</span> </p>
      
      <p className="text-md font-thin text-[#1C171E] mt-4 text-left  ">
        Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
        suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be 
        about visual or performing arts, sports, games,
        gardening, model making, cooking, indoor or 
        outdoor activities…
        <br/>
       <span> If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
         products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</span>
         </p>
         <div className="mt-20 mb-0 ">
        <img src="/images/Group 27.png"  alt="" />
       </div>
        </div>
    
      
        {/* <div>
        <button onClick={toggleAuth}>
          {isSignIn ? <button>SignIn</button> : <button>Join Me</button>}
        </button>
      </div> */}
      <div onClick={toggleAuth}>
        {isSignIn ? <SignIn /> : <JoinMe />}
      </div>

   </div>
   </div>
  )
}

export default HomeScreen