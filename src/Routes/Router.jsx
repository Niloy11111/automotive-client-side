
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/Home/HomePage";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList";



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
            {
                path : '/addProduct',
                element : <AddProduct></AddProduct>,
                
            },
            {
                path : '/brandProductList/:brandName',
                element : <ProductList></ProductList>,
                loader : ({params}) => fetch(`http://localhost:5000/brands/${params.brandName}`),  
            }
            
         
        ]
    }
])