import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white mt-10 p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between">
                <div className="mb-8 md:mb-0">
                    <div className='flex gap-5'>
                        <img src="https://i.ibb.co/ynVsRNB/logofooter.png" alt="Company Logo" className="h-12 mb-4 rounded" />
                        <p className='text-2xl'>Inspire Hub</p>
                    </div>
                    <p className='inline-flex gap-5 justify-center items-center mb-2'><FaPhone /> 9620148590</p>
                    <p>Since 2023 </p>
                    <p className="text-sm my-4">
                        InspireHub, your premier blogging destination, is where creativity meets insight. Explore our diverse posts covering technology, lifestyle, and more. Join us in the journey of inspiration, knowledge, and connection.
                    </p>

                </div>

                {/* Second Part: Services */}
                <div className="ml-10  md:mb-0">
                    <h2 className="text-lg font-semibold mb-4">Our Services</h2>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">All kinds of Blog</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">Services</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="hover:text-gray-300">Communicate</a>
                        </li>
                    </ul>
                </div>

                {/* Third Part: Subscribe Newsletter */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Subscribe to Our <small className='text-2xl text-blue-500'>Inspire Hub</small></h2>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-gray-700 text-white py-2 px-4 rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex gap-5 justify-center items-center my-4'>
                <div className='  '><FaFacebook /></div>
                <div className=' '><FaLinkedin /></div>
                <div className='   '><FaInstagramSquare /></div>
                <div className=' '><FaTwitterSquare /></div>
            </div>
            <p className="text-sm mt-2 text-center">
                &copy; 2023 Inspire Hub. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
