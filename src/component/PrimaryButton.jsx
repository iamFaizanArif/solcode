import React from 'react';

const PrimaryButton = (props) => {
    return (
        <button
            className="text-white text-lg bg-black hover:bg-secoundry hover:text-black font-medium rounded-lg px-6 py-3">{props.title}
        </button>
    );
};

export default PrimaryButton;
