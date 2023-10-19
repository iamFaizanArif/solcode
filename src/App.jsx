// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    BrowserRouter as Router,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
    useLocation
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Projects from "./pages/Projects.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";
import {AnimatePresence} from "framer-motion";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            // {
            //     path: "/about-us",
            //     element: <AboutUs/>,
            // },
            // {
            //     path: "/contact-us",
            //     element: <ContactUs/>,
            // },
            // {
            //     path: "/services",
            //     element: <Services/>,
            // },
            // {
            //     path: "/projects",
            //     element: <Projects/>,
            // },
        ]
    },
]);
const App = () => {
    const location=useLocation();
    return (

            <div className={`flex flex-col h-screen`}>
                <Navbar/>
                <AnimatePresence mode={`wait`}>
                    {/*<RouterProvider router={router}/>*/}
                    <Routes location={location} key={location.pathname}>
                        <Route path={`/`} element={<Home/>}/>
                        <Route path={`/about-us`} element={<AboutUs/>}/>
                        <Route path={`/contact-us`} element={<ContactUs/>}/>
                        <Route path={`/services`} element={<Services/>}/>
                        <Route path={`/projects`} element={<Projects/>}/>
                    </Routes>
                </AnimatePresence>
                <Footer/>
            </div>

    );
};

export default App;
