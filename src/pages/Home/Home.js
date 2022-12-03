import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import s1 from './../../img/s1.png';

const Home = () => {
    return (
        <div className='bg-gray-50 lg:flex-row flex row justify-between mt-1 flex-col-reverse'>

            <div className='mt-5 lg:mt-44 mx-auto'>
                <h1 className='font-bold text-5xl'>Welcome To <span className='text-emerald-700'>Skill Edge</span></h1>
                <p className='mt-2 text-light'>This is skill online-learning website.<br/>Increase your skill level here.</p>
                <Link to='/courses'><button className='btn btn-primary mt-2 mb-3 lg:mb-0'>Get Started<FaArrowRight className='ml-2'></FaArrowRight></button></Link> 
            </div>

            <div className='mt-3 '>
            <img src={s1} alt=""/>
            </div>
           
        </div>
    );
};

export default Home;