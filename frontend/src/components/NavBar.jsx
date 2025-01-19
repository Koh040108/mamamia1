import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import cartIcon from "../assets/cart_icon.png";
import profileIcon from "../assets/profile_icon.png";
import searchIcon from "../assets/search_icon.png"; // Your search icon

const NavBar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
    const { products, searchTerm, setSearchTerm, getCartCount } = useContext(ShopContext);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search visibility
    const navigate = useNavigate();

    // Handle search input
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term); // Update the searchTerm state

        if (term) {
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase()) // Case-insensitive filtering
            );
            setSearchResults(results); // Set the filtered results
        } else {
            setSearchResults([]); // Reset results when search term is empty
        }
    };

    // Handle clicking a search result
    const handleResultClick = (productId) => {
        setSearchResults([]); // Clear search results after click
        setSearchTerm(""); // Reset the search term
        navigate(`/product/${productId}`); // Navigate to the product details page
    };

    return (
        <nav className="bg-gray-800 text-white w-full sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-2xl font-bold">
                    <NavLink to="/">MamaMia</NavLink>
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-1/3 md:w-auto">
                    {/* Search Icon (Visible on mobile only) */}
                    <button
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                        className="sm:hidden absolute left-0 top-1/2 transform -translate-y-1/2"
                    >
                        <img
                            src={searchIcon} // Search icon
                            alt="Search"
                            className="w-6 h-6"
                        />
                    </button>
                    {/* Search Input */}
                    {isSearchVisible && (
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm} // Controlled input
                            onChange={handleSearch} // Update search term
                            className="w-full px-4 py-2 pl-10 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 sm:ml-2"
                        />
                    )}
                    {/* Display search results */}
                    {searchResults.length > 0 && (
                        <div className="absolute z-10 w-full bg-white text-black mt-1 rounded shadow-lg max-h-64 overflow-y-auto">
                            {searchResults.map((product) => (
                                <div
                                    key={product._id} // Use product._id as unique key
                                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleResultClick(product._id)} // Navigate to product details
                                >
                                    {product.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Navigation Links for Desktop */}
                <ul className="hidden md:flex space-x-6">
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

                {/* Cart and Profile for Desktop */}
                <div className="relative flex items-center space-x-4 hidden md:flex">
                    {/* Cart */}
                    <div className="relative">
                        <NavLink to="/cart">
                            <img
                                src={cartIcon} // Use the local cart icon
                                alt="Cart"
                                className="w-8 h-8"
                            />
                            {getCartCount() > 0 && (
                                <span
                                    className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {getCartCount()}
                                </span>
                            )}
                        </NavLink>
                    </div>

                    {/* Profile */}
                    <div className="relative">
                        <button
                            className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded focus:outline-none hover:bg-gray-600"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                            <img
                                src={profileIcon}
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                            />
                        </button>
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <NavLink to="/login" className="block text-gray-800">
                                            View Profile
                                        </NavLink>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <NavLink to="/settings" className="block text-gray-800">
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
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-2">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu when item is clicked
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu when item is clicked
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/collection"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu when item is clicked
                            >
                                Collection
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu when item is clicked
                            >
                                Cart
                                {getCartCount() > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {getCartCount()}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className="block px-4 py-2 hover:bg-gray-700"
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu when item is clicked
                            >
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
