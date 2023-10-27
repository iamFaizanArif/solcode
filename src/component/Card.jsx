import React from 'react';
import {CiCircleMore} from "react-icons/ci";

const Card = ({style, image, title, domain,link}) => {
    return (
        <div style={{'--image-url': `url(${image})`}}
             className={`flex flex-col bg-[image:var(--image-url)] bg-no-repeat bg-cover rounded-lg h-[350px] max-w-sm xl:max-w-md ${style}`}
        >
            <div className="flex flex-col items-start justify-start p-5 bg-basic mx-3 rounded-xl mb-5 mt-auto group">
                <p className="mb-3 text-gray-100 underline decoration-secondary underline-offset-8">{domain}</p>
                <h5 className="mb-2 text-3xl font-bold text-gray-100">{title}</h5>
                <div className={`hidden group-hover:flex justify-end items-end ml-auto group-hover:animate-fade-down animate-fade-up text-gray-100 cursor-pointer`}>
                    <a href={link} target={`_blank`} className="flex items-center justify-center group-hover:animate-fade-down animate-fade-up "> <CiCircleMore size={20} className={`hover:text-secondary`}/>  <span className={`ml-1 hover:text-secondary`}>Read More</span></a>
                </div>

            </div>
        </div>
    );
};

export default Card;
