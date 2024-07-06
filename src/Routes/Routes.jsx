import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/BookService/BookService";
import Bookings from './../Pages/Bookings/Bookings';
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
           element:<Home/>
        },
        {
            path:'/bookings',
           element:<PrivateRoute><Bookings/></PrivateRoute>
        },
        {
            path:'/login',
           element:<Login/>
        },
        {
            path:'/signUp',
           element:<SignUp/>
        },
        {
          path:'/book/:id',
          element:<PrivateRoute><BookService/></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;