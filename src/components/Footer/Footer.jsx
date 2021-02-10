import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF,FaTwitter,FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="block text-center mt-10 bg-black text-white h-full p-10 w-full
        sm:h-full sm:p-4">
        <div className="container mx-auto">
        <div className="">
                <div className="mb-6">
                    <Link to="/"><h1 className="sm:text-4xl text-6xl xs:text-2xl">flex</h1></Link>
                </div>
                <div className="">
                    <ul className="flex flex-row items-center justify-center list-none md:text-xl sm:text-lg xs:text-xs">
                        <li>
                            <Link to="/" className="px-6 py-2 sm:px-4 xs:px-2">
                                <span className="">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="px-6 py-2 sm:px-4 xs:px-2">
                                <span className="">Features</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="px-6 py-2 sm:px-4 xs:px-2">
                                <span className="">FAQ</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="px-6 py-2 sm:px-4 xs:px-2">
                                <span className="">Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="px-6 py-2 sm:px-4 xs:px-2">
                                <span className="">Partners</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="mt-10">
                    <ul className="flex flex-row items-center justify-center list-none text-xl">
                        <li className="px-4 py-2">
                            <Link to="/" className="hover:text-blue-700">
                                <span> <FaFacebookF/> </span>
                            </Link>                       
                        </li>
                        <li className="px-4 py-2">
                            <Link to="/" className="hover:text-blue-700">
                                <span> <FaTwitter /> </span>
                            </Link>                       
                        </li>
                        <li className="px-4 py-2">
                            <Link to="/" className="hover:text-blue-700">
                                <span> <FaLinkedinIn/> </span>
                            </Link>                       
                        </li>
                    </ul>
                </div>
                <div className="text-xl mt-6 sm:text-lg">
                    <p>&copy; 2021 FXR Business Services Pte. Ltd</p>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Footer;
