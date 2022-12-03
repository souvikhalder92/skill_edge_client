import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaChessQueen, FaFilePdf, FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const course = useLoaderData();
    const ref = React.createRef();

  return (
        <div className="card w-72 lg:w-8/12 bg-base-200 shadow-xl mx-auto  mt-6">
            <Pdf targetRef={ref} filename="Course.pdf">
        {({ toPdf }) =>   <button onClick={toPdf} className='btn btn-light w-44 mx-auto mt-2 mr-3'>Download PDF <FaFilePdf onClick={toPdf} className='ml-2'></FaFilePdf></button>}
      </Pdf>
      <div ref={ref} className='w-10/12'>
          
  <figure className="px-10 pt-6">
  
    <img src={course.img} alt="" className="rounded-xl w-3/4" />
  
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{course.name}</h2>
    <h1 className='text-xl font-bold'>Skills</h1>
    <p>{course.skills}</p>
    <h1 className='font-bold'>About the Course:</h1>
    <p>{course.description}</p>
    <div className='block lg:flex'>
     <div className='flex'>
    <FaStar className='mt-auto lg:mt-1 mx-36 lg:mx-0 text-amber-300'></FaStar>
    </div> 
    <p  className='font-semibold mr-3'>{course.ratings}</p>
    <p className='font-semibold'>Course Duration: {course.Duration} hours</p>
    <p  className='font-semibold ml-3'>Reviews: {course.reviews}k</p>
    </div>
    <div className="card-actions">
    <Link to={`/checkout/${(course.id)}`}><button className="btn btn-primary">Get Premium Access <FaChessQueen className='ml-2 text-2xl text-yellow-400'></FaChessQueen> </button></Link>
    </div>
  </div>
</div>
</div>
    );
};

export default CourseDetails;