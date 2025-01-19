import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    const handleLogout = () => setToken('')

    return (
        <div className='flex items-center py-2 px-[4%] justify-between'>
            {/* Logo Section */}
            <img className='w-[max(7%,60px)] mr-1' src={assets.logo} alt="MamaMia Logo" />

            {/* Brand Name */}
            <p className="text-lg font-semibold">MamaMia</p>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'
            >
                Logout
            </button>
        </div>
    )
}

export default Navbar
