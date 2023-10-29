// eslint-disable-next-line no-unused-vars
import React from 'react';
import {hero} from "../assets/index.js";
import Button from "./Button.jsx";
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className={`pattern w-1/3 h-1/3 rounded-es-full absolute right-0 animate-pulse animate-fade-down`}></div>
            <div className={`pattern w-1/3 h-1/5 rounded-se-full absolute bottom-0 left-0 animate-pulse animate-fade-up`}></div>
            <section
                className="flex justify-center items-center bg-basic text-white body-font text-center h-screen pt-16">
                <div
                    className="relative z-10 container mx-auto flex px-5 md:flex-row flex-col justify-center items-center text-primary">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fade-right">
                        <h1 className="title-font text-4xl 2xl:text-5xl mb-4 font-black leading-relaxed 2xl:leading-normal">
                            Welcome to <span className={`text-secondary`}>SolCodes</span> - Empowering Your Digital
                            Presence!
                            {/*CREATIVE & MINIMAL <br className="hidden lg:inline-block"/> IT AGENCY.*/}
                        </h1>
                        <p className="my-4 text-base 2xl:text-xl leading-relaxed 2xl:leading-normal">At SolCodes, we're dedicated to elevating your
                            online presence through a range of specialized services that cater to all your digital
                            needs. With a team of skilled professionals and a passion for innovation, we offer a suite
                            of services designed to help your business thrive in the digital landscape</p>
                        <div className="mt-6 flex justify-center space-x-4">
                            <Link to={`/about-us`}> <Button title={`About Us`} style={`bg-secondary`}/></Link>
                            <Link to={`/projects`}><Button title={`See Projects`} style={`bg-secondary`}/></Link>
                        </div>
                    </div>
                    <div className="2xl:max-w-xl lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden animate-fade-left animate-delay-1000">
                        <img
                            className="cursor-zoom-in object-cover object-center rounded rounded-ss-[6em] w-full h-auto transition duration-500 ease-in-out transform hover:scale-150"
                            alt="hero"
                            src={hero}/>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Hero;
