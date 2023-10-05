// eslint-disable-next-line no-unused-vars
import React, {useEffect, useLayoutEffect} from 'react';
import {Outlet,useLocation,ScrollRestoration} from "react-router-dom";
import {Footer, Navbar} from "../component/index.js";

const MainLayout = () => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ScrollRestoration />
        </>
    );
};

export default MainLayout;
