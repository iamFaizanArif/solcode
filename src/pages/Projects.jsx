import React, {useState} from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import Button from "../component/Button.jsx";
import Card from "../component/Projects/Card.jsx";
import {p1, p2, p3, p4, p5, p6, p7, p8} from "../assets/index.js";

import {motion} from "framer-motion";

const Projects = () => {
    const [all, setAll] = useState(true);
    const [mobile, setMobile] = useState(false);
    const [mern, setMern] = useState(false);
    const [onPage, setOnPage] = useState(false);
    const [wordPress, setWordPress] = useState(false);
    const [uiUx, setUiUx] = useState(false);
    const All = () => {
        setAll(true);
        setMobile(false);
        setMern(false);
        setOnPage(false);
        setWordPress(false);
        setUiUx(false);
    }
    const Mobile = () => {
        setAll(false);
        setMobile(true);
        setMern(false);
        setOnPage(false);
        setWordPress(false);
        setUiUx(false);
    }
    const Mern = () => {
        setAll(false);
        setMobile(false);
        setMern(true);
        setOnPage(false);
        setWordPress(false);
        setUiUx(false);
    }
    const OnPage = () => {
        setAll(false);
        setMobile(false);
        setMern(false);
        setOnPage(true);
        setWordPress(false);
        setUiUx(false);
    }
    const WordPress = () => {
        setAll(false);
        setMobile(false);
        setMern(false);
        setOnPage(false);
        setWordPress(true);
        setUiUx(false);
    }
    const UIUX = () => {
        setAll(false);
        setMobile(false);
        setMern(false);
        setOnPage(false);
        setWordPress(false);
        setUiUx(true);
    }
    return (
        <motion.div  initial={{width:0}}
                     animate={{width:"100%"}}
                     exit={{x:window.innerWidth}}
                     transition={{duration:0.5,ease:[0.22,1,0.36,1]}}  className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'Projects'} from={"/"} to={"/projects"}/>
            <div className="container px-5 py-24 mt-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Case
                        Study</p>
                    <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Projects</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Welcome to our portfolio, where we proudly present a diverse range of projects that highlight our expertise and dedication. As a testament to our unwavering commitment to excellence and innovation, our portfolio showcases the tangible results of our hard work and creativity. In this collection, you'll find a variety of projects that demonstrate our proficiency in various fields. From web development and design to marketing strategies and content creation, each project reflects our passion and precision. Our projects encompass a wide array of industries and services, demonstrating our versatility and ability to meet the unique needs of our clients.</p>
                    <div className={`container py-24 mt-12 mx-auto w-full`}>
                        <Card
                            title={`DK Bookings`}
                            details={`DKbookings is the app you have been looking for and the app that you didn’t know you would need! You will now be able to find and book your ideal service providers with ease and be able to communicate with your service provider without stepping outside of the app platform.
`}
                            appTitle={`App Development`}
                            webTitle={`Web Development`}
                            img={p2}
                            />
                    </div>
                    <div className={`hidden py-12`}>
                        <Button onClick={All} title={"All"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <div className={`hidden grid-cols-1 md:grid-cols-3 gap-6 mt-12`}>
                            {all && (
                                <>
                                    <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                                          link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                                    />
                                    <Card title={`ORA`} image={p2} domain={`Mobile App`}
                                          link={`https://apps.apple.com/pk/app/oar-app/id1639555344`}
                                    />
                                    <Card title={`Burnout`} image={p3} domain={`Mobile App`}
                                          link={`https://apps.apple.com/us/developer/burnout-challenge-fitness-llc/id1585892531`}
                                    />
                                    <Card title={`Phone Check`} image={p4} domain={`Mobile App`}
                                          link={`https://apps.apple.com/us/app/phonecheck/id1446390777`}
                                    />
                                    <Card title={`ACTIIFY`} image={p5} domain={`Mobile App`}
                                          link={`https://apps.apple.com/us/app/actiify/id1568866005`}
                                    />
                                    <Card title={`Dkbookings`} image={p7} domain={`Website`}
                                          link={`https://www.dkbookings.com/`}
                                    />
                                    <Card title={`OAR`} image={p6} domain={`Website`}
                                          link={`https://oarapp.com/`}
                                    />
                                    <Card title={`JVLands`} image={p8} domain={`Website`}
                                          link={`https://jvlands.com/`}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
