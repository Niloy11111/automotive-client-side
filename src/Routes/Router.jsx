
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";

  

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root> ,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
           
            // {
            //     path : '/login',
            //     element : <Login></Login>
            // },
         
        ]
    }
])