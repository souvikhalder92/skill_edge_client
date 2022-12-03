import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";
import CourseDetails from "../CourseDetails/CourseDetails";
import Main from "../layout/Main";
import Alert from "../pages/Alert/Alert";
import Blog from "../pages/Blog/Blog";
import Course from "../pages/Course/Course";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           { 
            path:'/',
            element:<Home></Home>
        },
        { 
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/courses',
            loader: () => fetch('https://skill-edge-server-two.vercel.app/courses'),
            element:<Courses></Courses>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/faq',
            element:<FAQ></FAQ>
        },
        {
            path:'/courses/:id',
            loader: ({params}) => fetch(`https://skill-edge-server-two.vercel.app/courses/${params.id}`),
            element:<Course></Course>
        },
        {
            path:'/courseDetails/:id',
            loader: ({params}) => fetch(`https://skill-edge-server-two.vercel.app/courses/${params.id}`),
            element:<CourseDetails></CourseDetails>
        },
        {
            path:'/checkout/:id',
            loader: ({params}) => fetch(`https://skill-edge-server-two.vercel.app/courses/${params.id}`),
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
      
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }

        ]
    },
    {
        path:'*',
        element:<Alert></Alert>
    }
])