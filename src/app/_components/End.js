import React from 'react'

const End = () => {
  return (
    <div  className='bg-[#F7FDFF]'>
        <div className='text-left pt-[100px] pl-[100px]'>
            <div className='text-4xl italic font-bold'>
                <p>Your <span className='text-[#8064A2]'>Hobby</span>,Your <span className='text-[#0096C8]'>Community</span></p>
               
            </div>
               <button className=" h-[40px] border-2 bg-[#8064A2] text-white flex  items-center font-bold justify-center w-[122px] rounded-lg mt-8 "
              >Get started</button>

        </div>

        <div className='h-[302px] mt-8 pl-[100px]'>
            <img src="/images/Group 99.png" alt="" />
        </div>
    </div>
  )
}

export default End