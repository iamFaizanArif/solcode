// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import { lazy } from 'react';
import {AnimatePresence} from "framer-motion";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import OnPage from "./pages/OnPage.jsx";
import WordPress from "./pages/WordPress.jsx";
import MERN from "./pages/MERN.jsx";
import MobileApp from "./pages/MobileApp.jsx";
import UIUX from "./pages/UIUX.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
    const location=useLocation();
    return (

            <div className={`flex flex-col h-screen`}>
                <Navbar/>
                <ScrollToTop/>
                <AnimatePresence mode={`wait`}>
                    <Routes location={location} key={location.pathname}>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/about-us`} element={<AboutUs/>}/>
                        <Route path={`/contact-us`} element={<ContactUs/>}/>
                        <Route path={`/services`} element={<Services/>}/>
                        <Route path={`/projects`} element={<Projects/>}/>
                        <Route path={`/on-page-seo`} element={<OnPage/>}/>
                        <Route path={`/wordpress`} element={<WordPress/>}/>
                        <Route path={`/mern`} element={<MERN/>}/>
                        <Route path={`/mobile-app`} element={<MobileApp/>}/>
                        <Route path={`/ui-ux`} element={<UIUX/>}/>
                    </Routes>
                </AnimatePresence>
                <Footer/>
            </div>

    );
};

export default App;
