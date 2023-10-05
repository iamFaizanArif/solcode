// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Outlet} from "react-router-dom";
import {Footer, Navbar} from "../component/index.js";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;
