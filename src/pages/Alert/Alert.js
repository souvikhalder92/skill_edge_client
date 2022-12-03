import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = () => {
    const notify = () => toast("This Page is Not Found(404)!");
    return (
        <div className='App'>
            <h1 className='mt-60 font-bold text-3xl'>This page is Not Found(404)!!!</h1>
            <p className='mt-2 text-2xl'>Thank You!</p>
            <button onClick={notify} className='btn bg-amber-600 p-2 mt-3'>Not Found Toast!</button>
            <ToastContainer/>
          
        </div>
    );
};

export default Alert;