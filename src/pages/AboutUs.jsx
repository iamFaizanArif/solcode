import React from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import {AnimationOnScroll} from "react-animation-on-scroll";
import About from "../component/About.jsx";
import {aboutBanner2} from "../assets/index.js";
import {motion} from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div initial={{width:0}}
                    animate={{width:"100%"}}
                    exit={{x:window.innerWidth}}
                    transition={{duration:0.5,ease:[0.22,1,0.36,1]}}
                    // className={`slide-in`}
        >
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'About Us'} from={"/"} to={"/about-us"}/>
            <div className="container py-24 mt-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
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
                                <p className="mb-8 leading-relaxed">At Solcodes, we stand out as your dedicated software partners. Our wide-ranging expertise covers everything from mobile app development to web solutions, ensuring your project's success no matter the complexity. We're all about our clients, with a commitment to strong client relationships and tailored solutions. Innovation drives us, and we stay on the cutting edge of technology to bring the latest advancements to your project. Our focus on creating exceptional user experiences and providing custom software solutions ensures that your software not only functions but captivates. Our vision is to lead the way in transformative software solutions, pushing boundaries and shaping the digital future. We're motivated by a simple mission - to turn your software ideas into impactful reality. When you choose Solcodes, you choose innovation, dedication, and a partner in your digital success.</p>
                            </div>

                        </div>
                    </section>
                </AnimationOnScroll>
                <About/>
            </div>
        </motion.div>
    );
};

export default AboutUs;
