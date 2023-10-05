import React from 'react';
import Ticker from "framer-motion-ticker";
import Card from "./Swiper/Card.jsx";
import {service1, service2, service3} from "../assets/index.js";

const Banner = () => {
    const brand = [
        {img1: service1, img2: service2, img3: service3},
        {
            title1: "On-Page SEO",
            title2: "WordPress",
            title3: "MERN Stack",
            title4: "UI/UX Design",
            title5: "Mobile Application"
        },
        {
            desc1: "Stand out from the digital crowd with our expert on-page SEO services. We optimize your website to enhance its visibility on search engines, driving organic traffic and increasing your online reach. Our strategies are tailored to your industry, ensuring your content ranks high and connects with your target audience",
            desc2: "Your website is often the first interaction customers have with your brand. Our WordPress experts create visually stunning and highly functional websites that leave a lasting impression. From responsive designs to seamless navigation, we craft websites that reflect your brand's uniqueness",
            desc3: "Experience the power of modern web development with our MERN stack expertise. Whether it's a dynamic web application or an interactive platform, our skilled developers leverage MongoDB, Express, React, and Node.js to create robust and scalable solutions that align with your business goals",
            desc4: "A stunning user interface and seamless user experience are pivotal for your digital success. Our UI/UX designers craft visually appealing interfaces that prioritize user interactions. We believe in creating designs that not only captivate but also enhance user engagement, making your digital platforms a joy to use",
            desc5: "The world is at your customers' fingertips, and we help you reach them with our mobile app development services. Our talented team designs and develops apps for both Android and iOS platforms, ensuring your brand is accessible to users wherever they go"
        },
    ];
    return (
        <div>
            <div className="flex container px-5 py-24 mx-auto text-left">
                <Ticker duration={20}>
                    {brand.map((item, index) => (
                        <Card title={item.title}
                              desc={desc.item}
                              img={img.item}
                        />
                    ))}

                    <div
                        key={index}
                        className={`flex items-center justify-center w-[150px] md:w-[200px] h-[40px] xl:h-[80px] m-1 md:m-5 bg-contain bg-no-repeat`}
                        style={{
                            backgroundImage: `url(${item})`,
                        }}
                    />
                </Ticker>
            </div>

        </div>
    );
};

export default Banner;
