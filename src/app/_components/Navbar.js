"use client";
import React, { useState, useRef, useEffect } from 'react';
import PopupMenu from "./PopupMenu";

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const buttonRef = useRef(null);
  
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    console.log("popshowed");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);  


  return (
    <div className="nav_bar container mx-auto h-[80px] ">
      <div>
        <img src="/images/HobbyCue_Logo.png" alt="" />
      </div>

      <div className="searchBox flex items-center border rounded-sm ">
        <div>
          {" "}
          <input type="text" placeholder="search hear" />
        </div>
        <div>
          {" "}
          <img src="/images/Group 17.png" alt="" />
        </div>
      </div>

      <div className="Group-72 flex items-center gap-3">
        <div className="flex gap-0">
          <div className="w-[40px]">
            <img src="/images/Explore.png" alt="" />
          </div>
          <p>Expolre</p>
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-[30px] p-0">
            <img src="/images/Hobbies.png" alt="" />
          </div>
          <p>Hobbies</p>
          <div className="menu-container relative">
          <button ref={buttonRef} onClick={togglePopup} className="w-[30px]   ">
              <img src="/images/vect.png" alt="" />
            </button>
            { isPopupVisible && <PopupMenu />}
          </div>
        </div>
        <div className="w-[25px]">
          <img src="/images/Vector (1).png" alt="" />
        </div>
        <div className="w-[30px]">
          <img src="/images/notifications_black_24dp 1.png" alt="" />
        </div>
        <div className="W-[30PX]">
          <img src="/images/prod.png" alt="" />
        </div>

        <button className="border px-4 py-2  rounded border-purple">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
