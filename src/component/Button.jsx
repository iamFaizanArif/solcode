import React from 'react';

const Button = (props) => {
    return (
        <button
            className={`text-gray-100 hover:text-white text-base 2xl:text-lg font-semibold font-medium rounded-md px-8 py-3 2xl:py-3.5 ${props.style}`}>{props.title}
        </button>
    );
};

export default Button;
