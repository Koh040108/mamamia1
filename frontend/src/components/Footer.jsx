import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa"; // React icons for social media

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Section */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4">About Mamma Mia</h5>
                        <p className="text-gray-400">
                            Discover the best in fashion, lifestyle, and inspiration. Shop the latest trends and join the Mamma Mia community for style, elegance, and everything in between.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-gray-300">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-gray-300">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="text-gray-400 hover:text-gray-300">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="https://pinterest.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                                <FaPinterest className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Contact Information</h5>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Phone: +1 (800) 123-4567</li>
                            <li className="text-gray-400">Email: support@mammamia.com</li>
                            <li className="text-gray-400">Address: 123 Fashion Ave, Suite 456, New York, NY 10001</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-6 mt-8 text-center">
                    <small className="text-gray-400">&copy; 2025 Mamma Mia. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
