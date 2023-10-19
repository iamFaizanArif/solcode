// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
// import {TbComet} from "react-icons/tb";
import {logo, logo2} from "../assets/index.js";
import {Link} from "react-router-dom";
// import Button from "./Button.jsx";
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import {GiCometSpark} from 'react-icons/gi';
import {GiBurningMeteor} from 'react-icons/gi';
// import logo from '../../images/logo.png';

// We are going to create new functional component, which accept few props
const NavbarItem = ({title, classProps}) => {
    // It will return a li
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <header className="bg-basic text-white body-font drop-shadow-lg w-full fixed z-50">
            <div className="container mx-auto flex flex-wrap px-5 md:flex-row items-left items-center">

                <Link to={`/`} className={`contents`}>
                    <img src={logo} alt={`logo`} className={`w-1/5 md:w-[6%] inline`}/>
                    <img src={logo2} alt={`logo`} className={`w-[12%] hidden md:inline`}/>
                </Link>

                <nav className={`ml-auto flex z-50`}>
                    <ul className="hidden md:ml-auto md:flex md:flex-wrap items-center text-base 2xl:text-xl justify-center space-x-5 text-primary">
                        <li><Link to={`/`} className="hover:text-gray-100 cursor-pointer ">Home</Link></li>
                        <li><Link to={`/about-us`} className="hover:text-gray-100 cursor-pointer">About Us</Link></li>
                        <li><Link to={`/services`} className="hover:text-gray-100 cursor-pointer">Services</Link></li>
                        <li><Link to={`/projects`} className="hover:text-gray-100 cursor-pointer">Projects</Link></li>
                        <li><Link to={`/contact-us`} className="hover:text-gray-100 cursor-pointer">Contact Us</Link>
                        </li>
                    </ul>
                    <div className='relative z-50'>
                        {toggleMenu
                            ?
                            <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer'
                                            onClick={() => {
                                                setToggleMenu(false)
                                            }}/>
                            :
                            <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => {
                                setToggleMenu(true)
                            }}/>}
                        {toggleMenu && (
                            <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                                <li className='text-xl w-full my-2'>
                                    <AiOutlineClose onClick={() => {
                                        setToggleMenu(false)
                                    }}/>
                                </li>
                                {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map((item, index) => (
                                    <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                                ))}
                            </ul>
                        )}

                    </div>
                </nav>
                {/*<Button title={`Get A Quote`}/>*/}
            </div>
        </header>
    )
}

export default Navbar