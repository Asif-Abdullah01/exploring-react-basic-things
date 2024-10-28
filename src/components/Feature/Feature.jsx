import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><IoMdCheckmarkCircleOutline className='text-green-600 mr-2'></IoMdCheckmarkCircleOutline> {feature}</p>
        </div>
    );
};

export default Feature;