import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

const Footer: React.FC = () => {
    return (
        <>
            <div className="w-full relative">
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="block w-full"
                >
                    <path
                        fill="#C80B45"
                        fillOpacity="1"
                        d="M0,160L80,186.7C160,213,320,267,480,272C640,277,800,235,960,224C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg> */}
                <footer className="bg-[#2a2325] text-white pt-10 pb-10 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {/* Logo and Navigation */}
                            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
                                <img src={Logo} alt="Logo" className="h-10 mb-4 md:mb-0 md:mr-6" />
                                <nav className="flex space-x-4 text-lg">
                                    <Link to="/" className="hover:text-gray-400 transition">
                                        Home
                                    </Link>
                                    <Link to="/about" className="hover:text-gray-400 transition">
                                        About
                                    </Link>
                                    <Link to="/contact" className="hover:text-gray-400 transition">
                                        Contact
                                    </Link>
                                </nav>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-4 text-xl">
                                <a href="https://facebook.com" className="hover:text-gray-400 transition">
                                    <FaFacebook />
                                </a>
                                <a href="https://google.com" className="hover:text-gray-400 transition">
                                    <FaGoogle />
                                </a>
                                <a href="https://twitter.com" className="hover:text-gray-400 transition">
                                    <FaTwitter />
                                </a>
                                <a href="https://youtube.com" className="hover:text-gray-400 transition">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-8 text-center md:text-left">
                            <p className="text-white">Made with by Anuj Kumar Gupta © 2023 Library Management System</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
