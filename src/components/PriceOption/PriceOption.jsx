import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
 
    // console.log(option);
    return (
        <div className='bg-blue-200 rounded-xl p-4 flex flex-col'>
            <h2 className='text-center'>
                <span  className='text-6xl font-extrabold'>{price}</span>
                <span  className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl text-center my-4'>{name}</h4>
            <div className='pl-12 flex-grow'>
            {
                features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-10 bg-green-400 w-full py-4 font-bold rounded-lg hover:bg-green-200'>Buy Now</button>
        </div>
    );
};

export default PriceOption;