import React from 'react'

const NavbarMobile = () => {
  return (
    <div className='h-[38px] flex flex-row border justify-evenly items-center  '>
      <div className='w-[156px]'> 
      <img src="/images/HobbyCue_Logo.png" alt="" />
      </div>
      <div className='flex flex-row items-center gap-4 justify-between'>
        <div className='h-[30px]'> <img src="/images/icons8.png" alt="" /></div>
        <div className="w-[32px]"><img src="/images/notifications_black_24dp 1.png" alt="" /></div>
        <div className="w-[32px]"><img src="/images/Vectorline.png" alt="" /></div>
      </div>
     
    </div>
  )
}

export default NavbarMobile