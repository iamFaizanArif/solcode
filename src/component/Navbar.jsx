// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
// import {TbComet} from "react-icons/tb";
import {logo, logo2} from "../assets/index.js";
import {Link} from "react-router-dom";
// import Button from "./Button.jsx";

const Navbar = () => {

    return (
        <header className="bg-basic text-white body-font drop-shadow-lg w-full z-50">
            <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-left md:items-center">

                <Link to={`/`} className={`contents`}>
                    <img src={logo} alt={`logo`} className={`w-1/5 md:w-[6%] inline`}/>
                    <img src={logo2} alt={`logo`} className={`w-[10%] hidden md:inline`}/>
                </Link>

                <nav
                    className="hidden md:ml-auto md:flex md:flex-wrap items-center text-base 2xl:text-xl justify-center space-x-5 text-primary">
                    <Link to={`/`} className="hover:text-gray-100 cursor-pointer ">Home</Link>
                    <Link to={`/about-us`} className="hover:text-gray-100 cursor-pointer">About Us</Link>
                    <Link to={`/services`} className="hover:text-gray-100 cursor-pointer">Services</Link>
                    <Link to={`/projects`} className="hover:text-gray-100 cursor-pointer">Projects</Link>
                    <Link to={`/contact-us`} className="hover:text-gray-100 cursor-pointer">Contact Us</Link>
                </nav>
                {/*<Button title={`Get A Quote`}/>*/}
            </div>
        </header>
    )
}

export default Navbar