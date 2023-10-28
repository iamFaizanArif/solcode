import React, {useState} from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import Button from "../component/Button.jsx";
import Card from "../component/Projects/Card.jsx";
import {p1, p2, p3, p4, p5, p6, p7, p8} from "../assets/index.js";

import {motion} from "framer-motion";
import CardReverse from "../component/Projects/CardReverse.jsx";

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
        <motion.div initial={{width: 0}}
                    animate={{width: "100%"}}
                    exit={{x: window.innerWidth}}
                    transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}} className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'Projects'} from={"/"} to={"/projects"}/>
            <div className="container px-5 pt-24 mt-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Case
                        Study</p>
                    <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Projects</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Welcome to our
                        portfolio, where we proudly present a diverse range of projects that highlight our expertise and
                        dedication. As a testament to our unwavering commitment to excellence and innovation, our
                        portfolio showcases the tangible results of our hard work and creativity. In this collection,
                        you'll find a variety of projects that demonstrate our proficiency in various fields. From web
                        development and design to marketing strategies and content creation, each project reflects our
                        passion and precision. Our projects encompass a wide array of industries and services,
                        demonstrating our versatility and ability to meet the unique needs of our clients.</p>
                    <div className={`container py-24 mt-12 mx-auto w-full`}>
                        <Card
                            title={`DK Bookings`}
                            details={`DKbookings is the app you have been looking for and the app that you didn’t know you would need! You will now be able to find and book your ideal service providers with ease and be able to communicate with your service provider without stepping outside of the app platform.
`}
                            appTitle={`App Development`}
                            webTitle={`Web Development`}
                            img={p6}
                            webLink={`https://www.dkbookings.com/`}
                            appLink={'https://apps.apple.com/us/app/dkbookings/id1363765259'}
                        />
                        <CardReverse
                            title={`Phone Check `}
                            details={`A standardized used device checklist to help identify basic functionality, provides available device information to assist user, requires manual inspection of the device, and input from the tester`}
                            appTitle={`App Development`}
                            webStyle={`hidden`}
                            img={p2}
                            webClass={`hidden`}
                            appLink={'https://apps.apple.com/us/app/phonecheck/id1446390777'}
                        />
                        <Card
                            title={`ACTIIFY`}
                            details={`Experience genuine human connection the classic way - in person. ACTIIFY is designed to help you step out, meet new people, and nurture lasting friendships. Whether you're interested in expanding your social circle or making new friends, ACTIIFY is where you can spark and maintain authentic connections.`}
                            appTitle={`App Development`}
                            webStyle={`hidden`}
                            img={p1}
                            webClass={`hidden`}
                            appLink={'https://apps.apple.com/us/app/actiify-local-social-events/id1568866005'}
                        />
                        <CardReverse
                            title={`Cartao Socio`}
                            details={`O Cartao de Socio Online vem facilitar a comunicacao de informacao util e em tempo real entre a associacao e o associado.
Nesta area reservada e encriptada o socio pode consultar as suas quotas, recibos, mensagens, avisos, noticias e o calendario de actividades.`}
                            appTitle={`App Development`}
                            webStyle={`hidden`}
                            img={p7}
                            webClass={`hidden`}
                            appLink={'https://apps.apple.com/us/app/cartao-socio/id989240119'}
                        />
                        <Card
                            title={`Oar`}
                            details={`Customers with Best workers
to get the job done!
NO BARGAIN, NO LOSS: Hire the reliable worker at the most reasonable fixed rate
and save your valuable time!`}
                            appTitle={`App Development`}
                            webTitle={`Web Development`}
                            img={p3}
                            webLink={`https://oarapp.com/`}
                            appLink={'https://oarapp.com/download-oar-for-woker/'}
                        />
                        <CardReverse
                            title={`Oar App`}
                            details={`Now, you don’t have to go out to find a handyman. The Oar App does the job for you. Register yourself, find a suitable professional for your desired tasks and get it done without any hassle. The Oar app makes hiring the best workers around town simple and convenient.`}
                            appTitle={`App Development`}
                            webStyle={`hidden`}
                            img={p4}
                            webClass={`hidden`}
                            appLink={'https://apps.apple.com/pk/app/oar-app/id1639555344'}
                        />
                        <Card
                            title={`JVLands`}
                            details={`JV Lands Provides you the best use of your land.
JV Lands gives expert opinion to convert your Barren land into cultivable.
JV Lands also provides best way to construct your homes with joint venture.`}
                            appTitle={`App Development`}
                            webTitle={`Web Development`}
                            img={p5}
                            webLink={`https://jvlands.com/`}
                            appLink={'https://apps.apple.com/us/app/jvlands/id1580615023'}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
