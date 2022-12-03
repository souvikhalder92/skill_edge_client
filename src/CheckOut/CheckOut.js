import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const course = useLoaderData();
    const notify = () => toast("Congratulations!Successfully Enroll...");
    return (
        <div>
            <div className="card w-72 lg:w-96 bg-base-200 shadow-xl mx-5 lg:mx-auto mt-24 mb-40">
  <div className="card-body">
    <h2 className="text-center text-4xl font-bold text-orange-500">Check Out</h2>
    <h1 className='text-2xl font-semibold'>{course.name}</h1>
    <p><strong>Total: {course.price}K</strong></p>
    <p><strong>Discount: {course.discount}%</strong></p>
    <p>Get Discount!!!Start your career.</p>
    <div className="card-actions justify-end">
      <button onClick={notify} className="btn btn-info">Enroll Now</button>
      <ToastContainer/>
    </div>
  </div>
</div>
        </div>
    );
};

export default CheckOut;