// eslint-disable-next-line no-unused-vars
import React, {useState,useEffect} from 'react';
import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {lazy} from 'react';
import {AnimatePresence} from "framer-motion";
import Loader from "./component/Loader.jsx"
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
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data (e.g., an API call)
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {isLoading ? (
                <Loader/>
            ) : (
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
                            <Route path={`/service/on-page-seo`} element={<OnPage/>}/>
                            <Route path={`/service/wordpress`} element={<WordPress/>}/>
                            <Route path={`/service/mern`} element={<MERN/>}/>
                            <Route path={`/service/mobile-app`} element={<MobileApp/>}/>
                            <Route path={`/service/ui-ux`} element={<UIUX/>}/>
                        </Routes>
                    </AnimatePresence>
                    <Footer/>
                </div>

            )}
        </>
    );
};

export default App;
