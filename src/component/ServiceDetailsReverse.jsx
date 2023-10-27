import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";

const ServiceDetailsReverse = ({title,no,details,img}) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInRight">
            <section className=" body-font text-center">
                <div className="container mx-auto flex px-5 pb-12 md:pb-0 md:flex-row flex-col-reverse  items-center">
                    <div className="w-[85%] md:w-[49%]">
                        <img className="object-cover object-center rounded w-full h-auto" alt="hero"
                             src={img}/>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:pl-8 md:pl-6">
                        <p className={`text-secondary underline text-lg font-semibold my-2 leading-loose tracking-wide`}>{no}</p>
                        <h1 className={`text-3xl font-bold title-font sm:text-4xl mb-4 animate-fade-right`}>{title}</h1>
                        {/*<h1 className="title-font sm:text-4xl text-xl mb-4 font-medium">*/}
                        {/*    We Do Design, Code & Develop Software Finally Launch.*/}
                        {/*</h1>*/}
                        <p className="mb-8 leading-relaxed">{details}</p>
                    </div>

                </div>
            </section>
        </AnimationOnScroll>
    );
};

export default ServiceDetailsReverse;
