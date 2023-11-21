import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    {/* <img src="https://i.ibb.co/ynVsRNB/logofooter.png" alt="logofooter" border="0">
<img src="https://i.ibb.co/ncgR5X3/logo.png" alt="logo" border="0"></img> */}
    return (
        <nav className="p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className='flex'>
                    <img src="https://i.ibb.co/ncgR5X3/logo.png" alt="" />
                    <Link to="/" className="text-black text-2xl font-bold" onClick={closeMenu}>
                        InspireHub
                    </Link>
                </div>

                {/* Navigation Links (hidden on small screens) */}
                <div className="hidden md:flex space-x-4">
                    <NavLink to="/" currentPath={location.pathname} onClick={closeMenu}>
                        Home
                    </NavLink>
                    <NavLink to="/categories" currentPath={location.pathname} onClick={closeMenu}>
                        Categories
                    </NavLink>
                    <NavLink to="/about" currentPath={location.pathname} onClick={closeMenu}>
                        About
                    </NavLink>
                    <NavLink to="/contact" currentPath={location.pathname} onClick={closeMenu}>
                        Contact
                    </NavLink>
                </div>

                {/* Responsive Menu Button (visible on small screens) */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <svg className="text-black h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Responsive Menu (hidden by default) */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-400 py-2">
                    <div className="container mx-auto flex flex-col items-center space-y-2">
                        <NavLink to="/" currentPath={location.pathname} onClick={closeMenu}>
                            Home
                        </NavLink>
                        <NavLink to="/categories" currentPath={location.pathname} onClick={closeMenu}>
                            Categories
                        </NavLink>
                        <NavLink to="/about" currentPath={location.pathname} onClick={closeMenu}>
                            About
                        </NavLink>
                        <NavLink to="/contact" currentPath={location.pathname} onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, currentPath, onClick, children }) => {
    const isActive = currentPath === to;
    const activeClassName = isActive ? 'text-blue-300 underline font-bold'
        : 'text-blue-500 hover:text-blue-400';

    return (
        <Link to={to} className={`text-black hover:${activeClassName}`} onClick={onClick}>
            {children}
        </Link>
    );
};

export default Navbar;
