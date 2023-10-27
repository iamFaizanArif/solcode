import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";

const ServiceDetails = ({title,no,details,img}) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeft">
            <section className=" body-font text-center">
                <div className="container mx-auto flex px-5 pb-12 md:pb-0 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        {/*<div className={`flex-none md:flex`}>*/}
                            <p className={`text-secondary underline text-xl font-semibold my-2 mr-4 leading-loose tracking-wide`}>{no}</p>
                            <h1 className={`text-3xl font-bold title-font sm:text-4xl mb-4 animate-fade-right`}>{title}</h1>
                        {/*</div>*/}
                        {/*<h1 className="title-font sm:text-4xl text-xl mb-4 font-medium">*/}
                        {/*    We Do Design, Code & Develop Software Finally Launch.*/}
                        {/*</h1>*/}
                        <p className="mb-8 leading-relaxed">{details}</p>
                    </div>
                    <div className="w-[85%] md:w-[49%]">
                        <img className="object-cover object-center rounded w-full h-auto" alt="hero"
                             src={img}/>
                    </div>
                </div>
            </section>
        </AnimationOnScroll>
    );
};

export default ServiceDetails;
