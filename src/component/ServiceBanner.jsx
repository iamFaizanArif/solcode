import React from 'react';

const ServiceBanner = ({title,details}) => {
    return (
        <div className={`container mx-auto flex px-5 pb-12 md:p-32 md:flex-row flex-col items-centre`}>
            <div className="flex flex-col text-center ">
                <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Our Solutions</p>
                <h1 className="text-4xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl font-bold title-font text-gray-900 mb-4">{title}</h1>
                <p className="text-lg leading-relaxed xl:w-[75%] lg:w-3/4 mx-auto text-gray-500s">{details}</p>
            </div>
        </div>

    );
};

export default ServiceBanner;
