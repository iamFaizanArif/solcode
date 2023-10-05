import React from 'react';
import Form from "../component/Form.jsx";
import Breadcrumb from "../component/Breadcrumb.jsx";

const ContactUs = () => {
    return (
        <section className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'Contact Us'} from={"/"} to={"/contact-us"}/>
            <Form/>
        </section>
    );
};

export default ContactUs;
