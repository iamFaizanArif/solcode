// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Hero} from "../component/index.js";
import Slider from "../component/Swiper/Slider.jsx";
import Pricing from "../component/Pricing/Pricing.jsx";
import AboutUs from "../component/AboutUs.jsx";
import Banner from "../component/Banner.jsx";
const Home = () => {
    return (
        <>
            <Hero/>
            {/*<Banner/>*/}
            <Slider/>
            <AboutUs/>
            <Pricing/>
        </>
    );
};

export default Home;
