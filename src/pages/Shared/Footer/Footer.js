import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='h-32 bg-gray-200 mt-1.5'>
            <div className='pt-12'>
                <h1 className='text-3xl font-bold text-cyan-700'><Link to='/'>Skill Edge</Link></h1>
                <p className='mt-1 text-light'>All rights reserved.@2022.Souvik Halder </p>
            </div>
             
        </div>
    );
};

export default Footer;