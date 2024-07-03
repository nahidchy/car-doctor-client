import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import BookService from "../Pages/BookService/BookService";

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
            path:'/login',
           element:<Login/>
        },
        {
            path:'/signUp',
           element:<SignUp/>
        },
        {
            path:'/checkOut/:id',
           element:<CheckOut/>,
           loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },{
          path:'/book/:id',
          element:<BookService/>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;