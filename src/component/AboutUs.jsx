import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";

const AboutUs = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeft">
        <section className=" body-font text-center">
            <div className="container mx-auto flex px-5 pb-32 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Get To Know</p>
                    <h1 className={`text-3xl font-bold title-font sm:text-4xl mb-4 animate-fade-right`}>About Us</h1>
                    <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium">
                        We Do Design, Code & Develop Software Finally Launch.
                    </h1>
                    <p className="mb-8 leading-relaxed">Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.</p>
                </div>
                <div className="2xl:max-w-xl lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded w-full h-auto" alt="hero"
                         src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
                </div>
            </div>
        </section>
        </AnimationOnScroll>
    );
};

export default AboutUs;
