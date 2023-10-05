import React from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import {service1, service2, service3} from "../assets/index.js";
import Card from "../component/Swiper/Card.jsx";

const Services = () => {
    return (
        <section className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'Services'} from={"/"} to={"/services"}/>
            <div className="container px-5 py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Our Solutions</p>
                    <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Services</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                    <div className={`py-12`}>
                       <div className={`text-left grid grid-cols-1 md:grid-cols-3 gap-6 mt-12`}>
                            <Card title="On-Page SEO"
                                  desc="Stand out from the digital crowd with our expert on-page SEO services. We optimize your website to enhance its visibility on search engines, driving organic traffic and increasing your online reach. Our strategies are tailored to your industry, ensuring your content ranks high and connects with your target audience"
                                  img={service1}
                            />
                            <Card title="WordPress"
                                  desc="Your website is often the first interaction customers have with your brand. Our WordPress experts create visually stunning and highly functional websites that leave a lasting impression. From responsive designs to seamless navigation, we craft websites that reflect your brand's uniqueness"
                                  img={service2}
                            />
                            <Card title="MERN Stack"
                                  desc="Experience the power of modern web development with our MERN stack expertise. Whether it's a dynamic web application or an interactive platform, our skilled developers leverage MongoDB, Express, React, and Node.js to create robust and scalable solutions that align with your business goals"
                                  img={service3}
                            />
                            <Card title="UI/UX Design"
                                  desc="A stunning user interface and seamless user experience are pivotal for your digital success. Our UI/UX designers craft visually appealing interfaces that prioritize user interactions. We believe in creating designs that not only captivate but also enhance user engagement, making your digital platforms a joy to use"
                                  img={service2}
                            />
                            <Card title="Mobile Application"
                                  desc="The world is at your customers' fingertips, and we help you reach them with our mobile app development services. Our talented team designs and develops apps for both Android and iOS platforms, ensuring your brand is accessible to users wherever they go"
                                  img={service3}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
