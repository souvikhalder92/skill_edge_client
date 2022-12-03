import React from 'react';
import { Link } from 'react-router-dom';
import { FaJoomla, FaUser } from "react-icons/fa";
import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const [change,setChange] = useState("light-theme");
    const {user,logOut}  = useContext(AuthContext);
    

    const handleLogOut = () =>{
      logOut()
      .then(() => {})
      .catch(error => console.log(error))
    }
  
    
    return (
           
        <nav className="navbar bg-gray-300 block lg:flex lg:justify-between md:flex md:justify-between">
        <div className="mx-2 lg:mx-24">
        <Link to="/"><FaJoomla className='mr-2 text-2xl'></FaJoomla></Link>
          <Link to="/">
          <h1 className='text-2xl text-cyan-800 font-bold'>Skill Edge</h1> 
          </Link>
        </div>
        <div className="mr-10 mx-20 lg:mx-0">
          <div className="block lg:flex mt-2">
          <Link to="/home" className="mr-2 lg:mr-3 text-orange-800 font-semibold text-1xl">
              Home
            </Link>
            <Link to="/courses" className="mr-2 lg:mr-3 text-orange-800 font-semibold text-1xl">
              Courses
            </Link>

            <Link to="/blog" className="mr-2 lg:mr-3 text-orange-800 font-semibold text-1xl">
              Blog
            </Link>
            <Link to="/faq"className="mr-2 lg:mr-3 text-orange-800 font-semibold text-1xl">
              FAQ
            </Link>
            <div>
            {user?.uid ? (
              <div className="flex justify-center items-center">
                 <button onClick={handleLogOut} className="mr-2 mb-2 text-orange-800 font-semibold text-1xl">
                  <Link to="/">Logout</Link>
                </button>
                {user?.photoURL ? (
                  <div>

                    <img
                      src={user?.photoURL}
                      className="h-8 rounded-full"
                      alt=""
                      data-tip={user.displayName}
                    />
                    <ReactTooltip />
                  </div>
                ) : (
                  <FaUser></FaUser>
                )}

               
              </div>
            ) : (
              <>
                <Link to="/login" className="mr-3 text-orange-800 font-semibold text-1xl" >
                  Login
                </Link>
                <Link to="/register" className="mr-3 text-orange-800 font-semibold text-1xl">
                  Register
                </Link>
              </>
            )}
          </div>
          <DarkModeToggle
      mode={change}
      dark="Dark"
      light="Light"
      size="sm"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={(mode) =>{
        setChange(mode);
      }}
    />


</div>

         
           
    
    </div>
    
        
      </nav>
      
    );
};

export default Header;