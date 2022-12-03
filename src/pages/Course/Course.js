import React from 'react';
import { FaArrowRight, FaEye, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
const Course = ({course}) => {
    const {id,name,img,description,skills,ratings,reviews,Duration} = course;
    return (
        <div className="card w-full lg:w-96 bg-gray-100 shadow-xl">
        <figure><img className='w-full h-48' src={img} alt="Course" /></figure>
        <div className="card-body">
          <h2 className="font-semibold text-center text-2xl">{name}</h2>
          <p><span className='font-semibold'>Skills You'll Gain:</span> {skills.slice(0,49)}...</p>
          <div>
            <div className='flex'>
                <div className='flex'>
                <FaStar className='mr-1 mt-1 text-sm text-amber-300'></FaStar><p>{ratings}</p>  
                <p>({reviews}k reviews)</p>
                </div>
              
                <p className='ml-5'>Duration: {Duration} hours</p>
                </div>
              
                <Link to={`/courseDetails/${(id)}`} className="flex"><button className="btn bg-blue-400 border-none  mt-3 mx-auto">
                Details<FaArrowRight className='ml-1'></FaArrowRight></button></Link>
           
           
          </div>
        </div>
      </div>
    );
};

export default Course;