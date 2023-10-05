import React from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import {AnimationOnScroll} from "react-animation-on-scroll";
import About from "../component/About.jsx";
import {aboutBanner2} from "../assets/index.js";

const AboutUs = () => {
    return (
        <section className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'About Us'} from={"/"} to={"/about-us"}/>
            <div className="container py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <section className=" body-font text-center">
                        <div className="container mx-auto flex px-5 pb-32 md:flex-row flex-col items-center">
                            <div className="2xl:max-w-xl lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                                <img className="object-cover object-center rounded w-full h-auto" alt="hero"
                                     src={aboutBanner2}/>
                            </div>
                            <div
                                className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:pl-24 md:pl-16">
                                <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Why
                                    Choose</p>
                                <h1 className={`text-3xl font-bold title-font sm:text-4xl mb-4 animate-fade-right md:leading-normal`}>Phasellus
                                    Tristique A Nisi Etal Tristique Cras Interdum.</h1>
                                <div className={`flex justify-between w-full`}>
                                    <div className={`text-black`}>
                                        <h1 className={`text-secondary text-3xl lg:text-5xl`}>15<sup>+</sup></h1>
                                        <p className={`text-lg my-4 mb-6`}>Project Completed</p>
                                    </div>
                                    <div className={`text-black`}>
                                        <h1 className={`text-secondary text-3xl lg:text-5xl`}>10<sup>+</sup></h1>
                                        <p className={`text-base md:text-lg my-4 mb-6`}>Satisfied Clients</p>
                                    </div>
                                    <div className={`text-black`}>
                                        <h1 className={`text-secondary text-3xl lg:text-5xl`}>7<sup>+</sup></h1>
                                        <p className={`text-lg my-4 mb-6`}>Expert Teams</p>
                                    </div>
                                </div>
                                <p className="mb-8 leading-relaxed">Integer purus odio, placerat nec rhoncus in,
                                    ullamcorper nec dolor. Class onlin aptent taciti sociosqu ad litora torquent per
                                    conubia nostra, per inceptos only himenaeos. Praesent nec neque at dolor venenatis
                                    consectetur eu quis ex. the Donec lacinia placerat felis non aliquam.Mauris nec
                                    justo vitae ante auctor tol euismod sit amet non ipsum. Praesent commodo at massa
                                    eget suscipit. Utani vitae enim velit. Ut ut posuere orci, id dapibus odio.</p>
                            </div>

                        </div>
                    </section>
                </AnimationOnScroll>
                <About/>
            </div>
        </section>
    );
};

export default AboutUs;
