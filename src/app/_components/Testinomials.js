import React from 'react'

const Testinomials = () => {
  return (
    <div className='border bg-[#F7FDFF]'>
       <div className='my-[100px] mx-[100px] border-2 rounded-md h-[284px] bg-white'>
             <div className='px-[40px] py-[40px]'>
                 <div className='flex items-center gap-2'>
                    <div className='w-[40px] h-[40px]'> <img src="/images/add.png" alt="" /></div>
                    <div className=' font-xl font-extrabold text-lg'>Add your own</div>
                 </div>
                 <div className='mt-4  text-left text-md gap-5  tracking-widest'>
                    Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should <br/> be on hobbycue? Go ahead and Add your Own page
                 </div>
                 <button className=" h-[40px] border-2 border-[#8064A2] flex  items-center justify-center w-[122px] rounded-md  font-bold  mt-4 text-[#8064A2]"
                 >ADD New</button>

             </div>
             
       </div>
    </div>
  )
}

export default Testinomials