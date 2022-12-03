import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);

            if(loading)
            {
                return <div className="radial-progress text-light" style={{"--value":70}}>70%</div>;
            }
             if(!user)
             {
                return <Navigate to="/login" state={{from: location}} replace></Navigate>
             }
             return children;
  
};

export default PrivateRoute;