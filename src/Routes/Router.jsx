
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/Home/HomePage";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductsDetails/ProductDetails";
import DetailsForm from "../ProductsDetailsForm/DetailsForm";
import UpdateProduct from "../UpdateProducts/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                
            },
            {
                path : '/brandProductList/:brandName',
                element : <ProductList></ProductList>,
                loader : ({params}) => fetch(`http://localhost:5000/brands/${params.brandName}`),  
            },
            // {
            //     path : '/details/:id',
            //     element :<ProductDetails></ProductDetails>,
            //     loader : ({params}) => fetch(`http://localhost:5000/allProducts/${params._id}`)
            // },
            {
                path : '/detailsForm',
                element : <DetailsForm></DetailsForm>
            },
            {
                path: 'updateProducts/:id',
                element: <UpdateProduct></UpdateProduct> ,
                loader: ({ params }) => fetch(`http://localhost:5000/allProducts/${params.id}`)
              },

         
        ]
    }
])