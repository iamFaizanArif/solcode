import React from 'react';
import {motion} from "framer-motion";
import logo from "../assets/img/logo.png"
const Loader = () => {
        return (
            <div className={`bg-basic flex items-center justify-center w-full h-screen`}>
              <img src={logo} className={`object-center object-contain w-1/4 md:w-[8%] animate-spin animate-once`}/>

            </div>
        );
    }
;

export default Loader;
