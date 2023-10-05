import React from 'react';
import {contactUsHero} from "../assets/index.js";

const Card = ({style,image,title}) => {
    return (
        <div style={{'--image-url': `url(${image})`}}
                  className={`relative bg-[image:var(--image-url)] h-[480px] max-w-sm bg-white/5 opacity-90 rounded-lg overflow-clip ${style}`}>
            {/*<div*/}
            {/*    className={`absolute bottom-10 blur-3xl opacity-80 bg-gradient-to-r from-[#FF5733] via-[#FFFF00] to-[#FFA500] p-12 rounded-lg ${style}`}>*/}
            {/*</div>*/}
                {/*<img className="w-1/2 h-1/2 object-cover" src={image} alt="project-images" loading="lazy"/>*/}
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                        {title}
                    </h5>
                    <p className="mb-3 font-normal text-green-500">
                        Open 24 hours*
                    </p>
                </div>
        </div>
    );
};

export default Card;
