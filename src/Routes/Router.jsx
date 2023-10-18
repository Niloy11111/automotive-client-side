
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/Home/HomePage";


  

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root> ,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
           {
            path : '/',
            element : <HomePage></HomePage>
           },
            {
                path : '/login',
                element : <Login></Login>
            },
         
        ]
    }
])