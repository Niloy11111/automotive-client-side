
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import HomePage from "../Pages/Home/HomePage";
import AddProduct from "../AddProduct/AddProduct";
import ProductList from "../ProductList/ProductList";
import UpdateProduct from "../UpdateProducts/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDetails from "../ProductsDetails/ProductDetails";
import MyCart from "../MyCart/MyCart";


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
                path : '/myCart',
                element : <PrivateRoute> <MyCart></MyCart> </PrivateRoute>,
                loader : () => fetch(' https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/addToCart')
                
            },
            {
                path : '/brandProductList/:brandName',
                element : <ProductList></ProductList>,
                loader : ({params}) => fetch(` https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/brands/${params.brandName}`),  
            },
            {
                path : 'details/:id',
                element :<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader : ({params}) => fetch(` https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/allProducts/${params.id}`)
            },
            {
                path: 'updateProducts/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> ,
                loader: ({ params }) => fetch(` https://automotive-server-side-eur51ebix-niloys-projects-a44fef83.vercel.app/allProducts/${params.id}`)
              },

         
        ]
    }
])