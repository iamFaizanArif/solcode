import React from 'react'
import { BiCheck } from 'react-icons/bi';

const Service = (props) => {
    return (
        <li className="flex items-center">
            <BiCheck className={`text-secondary mr-3`} size={24}/>{props.title}
        </li>
    )
}

export default Service