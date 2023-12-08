// Header.js 
import React from 'react';
import profilePic from '../assets/profile-pic.jpg'; // Make sure to import the actual image

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <img src={profilePic} alt="Profile" className="rounded-full h-10 w-10"/>
            <button aria-label="Open menu" className="p-2">
                {/* Hamburger menu icon here */}
            </button>
        </header>
   );
};

export default Header;