import React from 'react';
import Form from "../component/Form.jsx";
import Breadcrumb from "../component/Breadcrumb.jsx";

import {motion} from "framer-motion";

const ContactUs = () => {
    return (
        <motion.div  initial={{width:0}}
                     animate={{width:"100%"}}
                     exit={{x:window.innerWidth}}
                     transition={{duration:0.5,ease:[0.22,1,0.36,1]}}  className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'Contact Us'} from={"/"} to={"/contact-us"}/>
            <Form />
        </motion.div>
    );
};

export default ContactUs;
