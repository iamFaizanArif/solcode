import React from 'react';
import {AnimationOnScroll} from "react-animation-on-scroll";
import Button from "../Button.jsx";
import {app, web} from "../../assets/index.js";

const CardReverse = ({title, details, img, webTitle, webStyle, appStyle, appTitle,webClass,appClass,webLink,appLink}) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInRight">
            <section className=" body-font text-center">
                <div
                    className="container mx-auto flex px-5 pb-12 md:pb-24 md:flex-row flex-col-reverse justify-center items-center">
                    <div className="w-[85%] md:w-[49%] flex justify-center md:justify-start">
                        <img className="object-cover object-center rounded w-[75%] h-auto" alt="hero"
                             src={img}/>
                    </div>
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className={`text-4xl md:text-6xl font-bold title-font sm:text-4xl mb-4 animate-fade-right`}>{title}</h1>
                        <p className="mb-8 text-lg md:text-xl leading-relaxed">{details}</p>
                        <div className={webStyle}>
                            <div className={`flex items-center`}>
                                <img src={web} className={`py-4 object-cover object-center rounded w-[12%] h-auto`}
                                     alt={`web-icon`}/>
                                <h1 className={`text-2xl md:text-3xl font-black ml-6`}>{webTitle}</h1>
                            </div>
                        </div>
                        <div className={appStyle}>
                            <div className={`flex items-center`}>
                                <img src={app} className={`py-4 object-cover object-center rounded w-[12%] h-auto`}
                                     alt={`web-icon`}/>
                                <h1 className={`text-2xl md:text-3xl font-black ml-6`}>{appTitle}</h1>
                            </div>
                        </div>
                        <div className={`flex space-x-3 md:space-x-6`}>

                        <a className={webClass} href={webLink} target={`_blank`}>
                        <Button title={"Visit Website"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        </a>
                        <a className={appClass} href={appLink} target={`_blank`}>
                        <Button title={"Visit Application"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        </a>
                        </div>

                    </div>



                </div>
            </section>
        </AnimationOnScroll>
    );
};

export default CardReverse;
