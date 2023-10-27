// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Hero} from "../component/index.js";
import Slider from "../component/Swiper/Slider.jsx";
import About from "../component/About.jsx";
import {motion} from "framer-motion";

const Home = () => {
    return (
        <motion.div >
            <Hero/>
            {/*<Banner/>*/}
            <Slider/>
            <About/>
            {/*<Pricing/>*/}
        </motion.div>
    );
};



export default Home;
