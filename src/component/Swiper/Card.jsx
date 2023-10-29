import React from 'react';
import {Link} from "react-router-dom";
const Card = (props) => {
    const {title, desc,img,style,imgStyle,link} = props;
    return (
        <div className="max-h-sm max-w-md md:max-w-lg; mx-auto text-black group ">
            <div className={`${style} border-[1px] rounded-md group-hover:text-white group-hover:bg-[#0D0D0F] shadow-lg`}>
                <img alt="service"
                     className={`w-1/5 object-cover object-center m-6 ${imgStyle}`}
                     src={img}
                />
                <div className="flex-grow mx-2 md:mx-8">
                    <h2 className="title-font font-semibold text-2xl mb-4 mx-2 md:mx-0">{title}</h2>
                    <p className="mb-4 text-md 2xl:text-lg px-2 xl:px-0 lg:px-0 md:px-0 sm:px-2 line-clamp-3 leading-relaxed">{desc}</p>
                </div>
                <p className="flex justify-end items-end mr-8 mb-8"><Link to={link}>Read More</Link></p>
            </div>
        </div>
    );
};

export default Card;
