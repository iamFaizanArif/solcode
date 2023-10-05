import React from 'react'
import Service from './Service'

const PricingCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const {styles,title,amount,duration,service}=props;
    return (
        <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg shadow xl:p-8 border w-full ${styles}`}>
            <h1 className={`text-3xl font-bold`}>{title}</h1>
            {/*<img src={props.image} className="w-full mx-auto mt-12"/>*/}
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-bold">{amount}</span>
                <span className="text-gray-500 white:text-gray-400">{duration}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {service.length > 0 && service.map((item) => (
                    <Service title={item} key={item} />
                ))}

            </ul>
            <button
                className="focus:outline-none text-white text-base bg-secondary hover:bg-secondary focus:ring-4 focus:ring-green-300 font-medium rounded-md px-8 py-2.5 mr-2 mb-2">Pay Now
            </button>
        </div>
    )
}

export default PricingCard