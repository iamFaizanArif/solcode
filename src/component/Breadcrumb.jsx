import React from 'react';
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {contactUsHero} from "../assets/index.js";

const Breadcrumb = ({title,from,to}) => {
    return (
        <div style={{'--image-url': `url(${contactUsHero})`}}
             className='relative bg-cover bg-center bg-[image:var(--image-url)] h-[480px] top-[70px]'>
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-90"
                style={{backgroundColor: "#191A1C",}}></div>
            <div className={`flex flex-col items-center justify-center text-center h-[480px] relative`}>
                <h1 className={`title-font text-4xl 2xl:text-6xl mb-4 font-black text-secondary pb-4`}>{title}</h1>
                <p className={`flex items-center justify-center text-base text-white`}>
                    <Link className={`text-secondary`} to={from}>Home</Link>
                    &nbsp;&nbsp;
                    <BsArrowRight className={`flex items-center justify-center text-white`}/>
                    &nbsp;&nbsp;
                    <Link to={to}>{title}</Link>
                </p>
            </div>
        </div>

    );
};

export default Breadcrumb;
