import React from 'react';

const Card = () => {
    return (
        <div className="p-4 max-w-md mx-auto text-black group ">
            {/*<div className={`border-[1px] rounded-md group-hover:text-white group-hover:bg-[#0D0D0F] shadow-lg`}>*/}
                <img alt="service"
                     className={`w-1/5 object-cover object-center m-6`}
                     // src={img}
                />
                <div className="flex-grow sm:mx-8">
                    {/*<h2 className="title-font font-semibold text-2xl mb-4">{title}</h2>*/}
                    {/*<p className="mb-4 text-md 2xl:text-lg px-2 xl:px-0 lg:px-0 md:px-0 sm:px-2 line-clamp-3 leading-relaxed">{desc}</p>*/}
                </div>
                <p className="flex justify-end items-end mr-8 mb-8">Read More</p>
            {/*</div>*/}
        </div>
    );
};

export default Card;
