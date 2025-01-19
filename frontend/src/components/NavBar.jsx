import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    // State to manage profile dropdown visibility
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    // State to manage mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Example state for the number of items in the cart
    const [cartItems, setCartItems] = useState(3);

    return (
        <nav className="bg-gray-800 text-white w-full sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-2xl font-bold">
                    <NavLink to="/">MamaMia</NavLink>
                </div>

                {/* Search Bar (Visible on all screen sizes, moved to Navbar) */}
                <div className="flex items-center w-1/3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-l bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-r">
                        Search
                    </button>
                </div>

                {/* Navigation Links for Desktop */}
                <ul className="hidden md:flex space-x-6">
                    {/* Each NavLink dynamically checks if the route is active */}
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-white pb-1"
                                    : "hover:underline hover:text-gray-300 transition-all duration-200"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-white pb-1"
                                    : "hover:underline hover:text-gray-300 transition-all duration-200"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/collection"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-b-2 border-white pb-1"
                                    : "hover:underline hover:text-gray-300 transition-all duration-200"
                            }
                        >
                            Collection
                        </NavLink>
                    </li>
                </ul>

                {/* Cart and Profile Section */}
                <div className="relative flex items-center space-x-4">
                    {/* Cart Icon with Item Count */}
                    <div className="relative">
                        <NavLink to="/cart">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l3 12h9l3-12h2"
                                />
                            </svg>
                            {/* Display item count if greater than 0 */}
                            {cartItems > 0 && (
                                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItems}
                                </span>
                            )}
                        </NavLink>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded focus:outline-none hover:bg-gray-600"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                            <img
                                src="https://via.placeholder.com/32"
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <NavLink
                                            to="/profile"
                                            className="block text-gray-800 hover:text-gray-600"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            View Profile
                                        </NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <NavLink
                                            to="/settings"
                                            className="block text-gray-800 hover:text-gray-600"
                                            onClick={() => setIsProfileOpen(false)}
                                        >
                                            Settings
                                        </NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200 border-t">
                                        <button
                                            className="w-full text-left text-gray-800 hover:text-red-600"
                                            onClick={() => {
                                                setIsProfileOpen(false);
                                                console.log("Logged out");
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-2">
                    {/* Mobile Navigation Links */}
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Services
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
