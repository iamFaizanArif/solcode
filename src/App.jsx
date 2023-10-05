// eslint-disable-next-line no-unused-vars
import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Projects from "./pages/Projects.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Services from "./pages/Services.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about-us",
                element: <AboutUs/>,
            },
            {
                path: "/contact-us",
                element: <ContactUs/>,
            },
            {
                path: "/services",
                element: <Services/>,
            },
            {
                path: "/projects",
                element: <Projects/>,
            },
        ]
    },
]);
const App = () => {
    return <RouterProvider router={router}/>;
};

export default App;
