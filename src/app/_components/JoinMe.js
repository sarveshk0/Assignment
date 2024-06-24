import React from 'react'

const JoinMe = () => {
  return (
    <div className="right ">

    <div className="space-x-4 text-xl h-[34px] w-[169px]">
      <button className=" w-[69px] h-[30px] text-[#939CA3]">Sign In</button>
      <button className=" joinIn w-[69px] h-[30] border-[#8064A2] text-[#8064A2]  border-b-4     ">Join Me</button>
   </div>
   
    
    <div className=" h-[40px] border-2 border-[#8064A2] flex gap-[88px] items-center py-[12px]  rounded-md pl-[24px] font-bold  mt-[32px]">
    <div className="h-[16px] w-[16px]">
      <img src="/images/Google.png" alt="" />
     </div>
     <div>
      Continue with Google
     </div>
    </div>

    <div className=" h-[40px] border-2 border-[#8064A2] flex gap-[79px] items-center py-[12px] rounded-md pl-[24px] font-bold  mt-[32px]">
    <div className="h-[16px] w-[16px]">
      <img src="/images/Facebook.png" alt="" />
     </div>
     <div>
      Continue with Facebook
     </div>
    </div>

    <div className="w-full h-[16px] mt-[28px] flex items-center " >
        <div className="w-[140px] h-[2px]  bg-[#CED4DA]"></div>
        <div className="font-semibold">Or connect with</div>
        <div className="w-[140px] h-[2px]  bg-[#CED4DA]"></div>
    </div>

    <div className="w-full h-[40px] flex items-center font-thin pl-1 border bg-[#ffffff] mt-[20px] rounded-lg">
      <input type="text" placeholder="Email" />
    </div>

         
    <div className="w-full h-[40px] flex items-center justify-between p-3 font-thin pl-1 border bg-[#ffffff] mt-[20px] rounded-lg">
      <input type="text" placeholder="Password" />
      <div><img src="/images/password.png" alt="" /></div>
    </div>
   
   <div className=" mt-[20px] font-thin flex  items-center justify-between">
    <div className="flex items-center justify-center">
      <div> <img src="/images/Rectangle 118.png" alt="" /></div>
      <div className='text-left text-sm px-4 font-bolder'>By continuing, you agree to our Terms of Service and Privacy Policy.</div>
    </div>
    
  </div>

 <button className="w-full h-[40px] border-2 bg-[#8064A2]  text-white flex  items-center justify-center py-[12px]  rounded-md  font-bold  mt-[32px]"
 > Agree and Continue</button>

</div>
  )
}

export default JoinMe