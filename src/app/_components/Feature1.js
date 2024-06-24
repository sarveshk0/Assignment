import React from 'react'

const Feature1 = () => {
  return (
    <div className='container  border'>
           <div className=" mx-auto  py-16 grid grid-cols-2  gap-4">
              <div className='border-2  py-8 text-left flex flex-col pl-[50px] items-start justify-center  rounded-md '>
                <div className='flex items-center space-x-6 '>
                    <div className='w-[40px] h-[40px]'><img src="/images/groups_black_24dp (1) 1.png" alt="" /></div>
                    <span className='font-semibold text-xl'>People</span>
                </div>
                
                    <span className='font-thin mt-8 px-auto -ml-3.5 items- leading-7 text-xl'>Find a teacher, coach, or expert for your hobby interest in your locality.
                     Find a partner, teammate, accompanist or collaborator.</span>
                
                <button className=" h-[40px] border-2 border-[#8064A2] flex  items-center justify-center w-[122px] rounded-md  font-bold  mt-8 text-[#8064A2]"
              >Connect</button>

              </div>

              <div className='border-2 py-8 text-left flex flex-col pl-[50px] items-start justify-center rounded-md '>
                <div className='flex items-center space-x-6 '>
                    <div className='w-[40px] h-[40px]'><img src="/images/location_on_black_24dp 1.png" alt="" /></div>
                    <span className='font-semibold text-xl'>Place</span>
                </div>
                
                    <span className='font-thin mt-8 px-auto -ml-3.5 items- leading-7 text-xl'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue..</span>
                
                <button className=" h-[40px] border-2 border-[#8064A2] flex  items-center justify-center w-[122px] rounded-md  font-bold  mt-8 text-[#8064A2]"
              >Meetup</button>

              </div>
              <div className='border-2 py-8 text-left flex flex-col pl-[50px] items-start justify-center  rounded-md '>
                <div className='flex items-center space-x-6 '>
                    <div className='w-[40px] h-[40px]'><img src="/images/shopping_basket_black_24dp (2) 1.png" alt="" /></div>
                    <span className='font-semibold text-xl'>Product</span>
                </div>
                
                    <span className='font-thin mt-8 px-auto -ml-3.5 items- leading-7 text-xl'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</span>
                
                <button className=" h-[40px] border-2 border-[#8064A2] flex  items-center justify-center w-[122px] rounded-md  font-bold  mt-8 text-[#8064A2]"
              >Get it</button>

              </div>
              <div className='border-2 py-8 text-left flex flex-col pl-[50px] items-start justify-center rounded-md '>
                <div className='flex items-center space-x-6 '>
                    <div className='w-[40px] h-[40px]'><img src="/images/event_available_black_24dp 2.png" alt="" /></div>
                    <span className='font-semibold text-xl'>Program</span>
                </div>
                
                    <span className='font-thin mt-8 px-auto -ml-3.5 items- leading-7 text-xl'>Find a teacher, coach, or expert for your hobby interest in your locality.
                     Find a partner, teammate, accompanist or collaborator.</span>
                
                <button className=" h-[40px] border-2 border-[#8064A2] flex  items-center justify-center w-[122px] rounded-md  font-bold  mt-8 text-[#8064A2]"
              >Attend</button>

              </div>
           </div>
         
    </div>
  )
}

export default Feature1