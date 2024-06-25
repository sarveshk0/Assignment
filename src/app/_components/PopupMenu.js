import React from 'react';
import './PopupMenu.css'; // optional for styling

const PopupMenu = () => {
  return (
    <div className="popup-menu">
      <ul>
        <li>People - Community</li>
        <li>Places - Venues</li>
        <li>Programs - Events</li>
      <li> Products - Store</li>
      <li> Blogs</li>
      </ul>
    </div>
  );
};

export default PopupMenu;
