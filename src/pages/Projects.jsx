import React from 'react';
import Breadcrumb from "../component/Breadcrumb.jsx";
import Button from "../component/Button.jsx";
import Card from "../component/Card.jsx";
import {p1} from "../assets/index.js";


const Projects = () => {
    return (
        <section className={``}>
            {/*pt-[74px]  md:pt-0*/}
            <Breadcrumb title={'Projects'} from={"/"} to={"/projects"}/>
            <div className="container px-5 py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className={`text-secondary underline text-lg font-semibold mb-2 leading-loose tracking-wide`}>Case
                        Study</p>
                    <h1 className="text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Projects</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle
                        crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine,
                        ramps microdosing banh mi pug.</p>
                    <div className={`py-12`}>
                        <Button title={"All"} style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button title={"On-Page SEO"} style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button title={"WordPress"} style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button title={"MERN Stack"} style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button title={"UI/UX Design"} style={"bg-basic mt-4 mr-4 hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <Button title={"Mobile Dev"} style={"bg-basic mt-4 mr-4  hover:bg-secondary hover:shadow-lg hover:shadow-secondary/50"}/>
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12`}>
                            <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                            link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                            />
                            <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                            link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                            />
                            <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                            link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                            />
                            <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                            link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                            />
                            <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                            link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                            />
                            <Card title={`Dkbookings`} image={p1} domain={`Mobile App`}
                            link={`https://apps.apple.com/us/app/dkbookings/id1363765259`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
