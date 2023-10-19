import React, {useState} from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import Button from "../component/Button.jsx";
import Card from "../component/Card.jsx";
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
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Discover our diverse portfolio of successful projects spanning various domains. At Solcodes, we take pride in our ability to deliver innovative and impactful solutions to our clients. </p>
                    <div className={`py-12`}>
                        <Button onClick={All} title={"All"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button onClick={OnPage} title={"On-Page SEO"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button onClick={WordPress} title={"WordPress"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button onClick={Mern} title={"MERN Stack"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button onClick={UIUX} title={"UI/UX Design"}
                                style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button onClick={Mobile} title={"Mobile Dev"}
                                style={"bg-basic mt-4 mr-4  hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12`}>
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
                            {mobile && (
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
                                </>
                            )}
                            {mern && (
                                <>

                                </>
                            )}
                            {uiUx && (
                                <>

                                </>
                            )}
                            {wordPress && (
                                <>
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
                            {onPage && (
                                <>

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
