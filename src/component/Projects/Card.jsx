import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";
import Button from "../Button.jsx";
import {app, web} from "../../assets/index.js";

const Card = ({title, details, img, webTitle, webStyle, appStyle, appTitle}) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeft">
            <section className=" body-font text-center">
                <div
                    className="container mx-auto flex px-5 pb-12 md:pb-0 md:flex-row flex-col justify-center items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className={`text-6xl font-bold title-font sm:text-4xl mb-4 animate-fade-right`}>{title}</h1>
                        <p className="mb-8 text-xl leading-relaxed">{details}</p>
                        <div className={appStyle}>
                            <div className={`flex items-center`}>
                                <img src={web} className={`py-4 object-cover object-center rounded w-[12%] h-auto`}
                                     alt={`web-icon`}/>
                                <h1 className={`text-2xl md:text-3xl font-black ml-6`}>{webTitle}</h1>
                            </div>
                        </div>
                        <div className={webStyle}>
                            <div className={`flex items-center`}>
                                <img src={app} className={`py-4 object-cover object-center rounded w-[12%] h-auto`}
                                     alt={`web-icon`}/>
                                <h1 className={`text-2xl md:text-3xl font-black ml-6`}>{appTitle}</h1>
                            </div>
                        </div>
                        <Button title={"Visit Website"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>

                    </div>

                    <div className="w-[85%] md:w-[49%] flex justify-center">
                        <img className="object-cover object-center rounded w-[75%] h-auto" alt="hero"
                             src={img}/>
                    </div>

                </div>
            </section>
        </AnimationOnScroll>
    );
};

export default Card;
