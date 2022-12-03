import React from 'react';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../../CourseDetails/CourseDetails';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid grid-cols-12 gap-2 lg:gap-24 mx-10 lg:mx-12'>
           <div className='col-start-1 lg:col-end-4 col-end-12 mt-6'>
              <p className='font-semibold'>All Courses: {courses.length}</p>
              {
                    courses.map(course => <p className='mt-3 text-cyan-700' key={course.id}>
                        <Link to={`/courseDetails/${course.id}`} className="text-xl text-light">
                        {course.name}
                    </Link></p>
                    )
                }
               
                <div className='mt-10 text-left'>
                <h1 className='text-2xl font-semibold'>Trending Courses</h1>
                </div>
              
                <div className="carousel w-full h-56 mt-3">
  <div id="slide1" className="carousel-item relative w-full h-56">
    <img src="https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg?tr=w-425" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-56">
    <img src="https://reliasoftware.com/static/9ce8aa204a21e69716018fee472b042c/54967/the-complete-guide-to-mobile-app-development-2021.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-56">
    <img src="https://cdn2.hubspot.net/hubfs/3928454/6%20Benefits%20of%20a%20Systems%20Development%20Life%20Cycle.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
           </div>
           <div className='col-start-1 lg:col-start-4 col-end-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 mt-5'>
          {
               courses.map(course => <Course 
                key={course.id}
                course={course}></Course>)
          
          }
           </div>
        </div>
    );
};

export default Courses;