import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from "react";
import "./Slider.css"
// import './Customers.css'
// import Features from "./Components/Features/Features.jsx";
import SwiperCore from 'swiper';
// import ChatGPT from "../../../assets/img/svg/icons8-chatgpt-144.svg"
// import Turnitin from "../../../assets/img/svg/turnitin-seeklogo.com.svg"
// import vYond from "../../../assets/img/svg/Vyond Logo Vector.svg"
// import AdobeCreative from "../../../assets/img/svg/icons8-adobe-creative-cloud-144.svg"
import Card from "./Card";
import {service1, service2, service3} from "../../assets/index.js";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Our
                        Solutions</p>
                    <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Services</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Welcome to Solcodes, your trusted destination for expert software solutions. Our dedicated team specializes in crafting dynamic and innovative software products to cater to a wide range of needs.</p>

                    <div className={`hidden md:block`}>
                        <Swiper
                            className=""
                            slidesPerView={1}
                            navigation
                            loop={true}
                            autoplay={true}
                            // pagination={{
                            //     clickable: true,
                            //     dynamicBullets: true, // Enable dynamic pagination bullets
                            // }}
                        >
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="On-Page SEO"
                                          desc="Stand out from the digital crowd with our expert on-page SEO services. We optimize your website to enhance its visibility on search engines, driving organic traffic and increasing your online reach. Our strategies are tailored to your industry, ensuring your content ranks high and connects with your target audience"
                                          img={service1}
                                          link={"/on-page-seo"}
                                    />
                                    <Card title="WordPress"
                                          desc="Your website is often the first interaction customers have with your brand. Our WordPress experts create visually stunning and highly functional websites that leave a lasting impression. From responsive designs to seamless navigation, we craft websites that reflect your brand's uniqueness"
                                          img={service2}
                                          link={"/on-page-wordpress"}
                                    />
                                    <Card title="MERN Stack"
                                          desc="Experience the power of modern web development with our MERN stack expertise. Whether it's a dynamic web application or an interactive platform, our skilled developers leverage MongoDB, Express, React, and Node.js to create robust and scalable solutions that align with your business goals"
                                          img={service3}
                                          link={"/mern"}
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="UI/UX Design"
                                          desc="A stunning user interface and seamless user experience are pivotal for your digital success. Our UI/UX designers craft visually appealing interfaces that prioritize user interactions. We believe in creating designs that not only captivate but also enhance user engagement, making your digital platforms a joy to use"
                                          img={service2}
                                          link={"/ui-ux"}
                                    />
                                    <Card title="Mobile App"
                                          desc="The world is at your customers' fingertips, and we help you reach them with our mobile app development services. Our talented team designs and develops apps for both Android and iOS platforms, ensuring your brand is accessible to users wherever they go"
                                          img={service3}
                                          link={"/mobile-app"}
                                    />

                                    <Card title="On-Page SEO"
                                          desc="Stand out from the digital crowd with our expert on-page SEO services. We optimize your website to enhance its visibility on search engines, driving organic traffic and increasing your online reach. Our strategies are tailored to your industry, ensuring your content ranks high and connects with your target audience"
                                          img={service1}
                                          link={"/on-page-seo"}
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className={`md:hidden block`}>
                        <Swiper
                            className=""
                            slidesPerView={1}
                            navigation
                            loop={true}
                            autoplay={true}
                            // pagination={{
                            //     clickable: true,
                            //     dynamicBullets: true, // Enable dynamic pagination bullets
                            // }}
                        >
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="On-Page SEO"
                                          desc="Stand out from the digital crowd with our expert on-page SEO services. We optimize your website to enhance its visibility on search engines, driving organic traffic and increasing your online reach. Our strategies are tailored to your industry, ensuring your content ranks high and connects with your target audience"
                                          img={service1}
                                          style={`px-4`}
                                          imgStyle={`ml-0`}
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="WordPress"
                                          desc="Your website is often the first interaction customers have with your brand. Our WordPress experts create visually stunning and highly functional websites that leave a lasting impression. From responsive designs to seamless navigation, we craft websites that reflect your brand's uniqueness"
                                          img={service2}
                                          style={`px-4`}
                                          imgStyle={`ml-0`}
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="MERN Stack"
                                          desc="Experience the power of modern web development with our MERN stack expertise. Whether it's a dynamic web application or an interactive platform, our skilled developers leverage MongoDB, Express, React, and Node.js to create robust and scalable solutions that align with your business goals"
                                          img={service3}
                                          style={`px-4`}
                                          imgStyle={`ml-0`}
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="UI/UX Design"
                                          desc="A stunning user interface and seamless user experience are pivotal for your digital success. Our UI/UX designers craft visually appealing interfaces that prioritize user interactions. We believe in creating designs that not only captivate but also enhance user engagement, making your digital platforms a joy to use"
                                          img={service2}
                                          style={`px-4`}
                                          imgStyle={`ml-0`}
                                    />

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">
                                    <Card title="Mobile Application"
                                          desc="The world is at your customers' fingertips, and we help you reach them with our mobile app development services. Our talented team designs and develops apps for both Android and iOS platforms, ensuring your brand is accessible to users wherever they go"
                                          img={service3}
                                          style={`px-4`}
                                          imgStyle={`ml-0`}
                                    />


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex container px-5 py-24 mx-auto text-left">

                                    <Card title="On-Page SEO"
                                          desc="Stand out from the digital crowd with our expert on-page SEO services. We optimize your website to enhance its visibility on search engines, driving organic traffic and increasing your online reach. Our strategies are tailored to your industry, ensuring your content ranks high and connects with your target audience"
                                          img={service1}
                                          style={`px-4`}
                                          imgStyle={`ml-0`}
                                    />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
