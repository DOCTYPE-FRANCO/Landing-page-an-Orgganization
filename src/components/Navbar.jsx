import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [mobile, setMobile] = useState(false);
    
    return(
        <div className="absolute top-0 left-0 w-full h-[50px] overflow-hidden">
            <div className="flex justify-center items-center h-full">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8 text-black">
                    <li><Link to="/" className="cursor-pointer hover:text-green-600 font-bold transition-colors duration-300">Home</Link></li>
                    <li><Link to="/events" className="cursor-pointer hover:text-green-600 font-bold transition-colors duration-300">Events</Link></li>
                    <li><Link to="/about" className="cursor-pointer hover:text-green-600 font-bold transition-colors duration-300">About</Link></li>
                    <li><Link to="/contact" className="cursor-pointer hover:text-green-600 font-bold transition-colors duration-300">Contact</Link></li>
                </ul>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex justify-end w-full mt-3 mr-3">
                    <button 
                        onClick={() => setMobile(true)} 
                        className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
                        aria-label="Open menu"
                    >
                        <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 group-hover:bg-green-600"></span>
                        <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 group-hover:bg-green-600"></span>
                        <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300 group-hover:bg-green-600"></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 z-50 transition-all duration-300 ${mobile ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    {/* Backdrop */}
                    <div 
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobile ? 'opacity-50' : 'opacity-0'}`}
                        onClick={() => setMobile(false)}
                    ></div>
                    
                    {/* Mobile Menu */}
                    <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${mobile ? 'translate-x-0' : 'translate-x-full'}`}>
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                            <button 
                                onClick={() => setMobile(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Navigation Links */}
                        <nav className="p-6">
                            <ul className="space-y-4">
                                <li>
                                    <Link 
                                        to="/" 
                                        onClick={() => setMobile(false)}
                                        className="flex items-center py-3 px-4 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/events" 
                                        onClick={() => setMobile(false)}
                                        className="flex items-center py-3 px-4 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/about" 
                                        onClick={() => setMobile(false)}
                                        className="flex items-center py-3 px-4 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact" 
                                        onClick={() => setMobile(false)}
                                        className="flex items-center py-3 px-4 text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium"
                                    >
                                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        
                        {/* Footer */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
                            <p className="text-sm text-gray-500 text-center">Lekki Brothers Club</p>
                            <p className="text-xs text-gray-400 text-center mt-1">Premier Social Organization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;