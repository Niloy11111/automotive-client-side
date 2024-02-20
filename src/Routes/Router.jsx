import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct/AddProduct";
import HomePage from "../Pages/Home/HomePage";
import MyCart from "../Pages/Home/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProducts/UpdateProduct";
import Root from "../Root/Root";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProductList from "../components/ProductList/ProductList";
import ProductDetails from "../components/ProductsDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>{" "}
          </PrivateRoute>
        ),
        loader: () =>
          fetch(" https://automotive-server-side-peach.vercel.app/addToCart"),
      },
      {
        path: "/brandProductList/:brandName",
        element: <ProductList></ProductList>,
        loader: ({ params }) =>
          fetch(
            ` https://automotive-server-side-peach.vercel.app/brands/${params.brandName}`
          ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://automotive-server-side-peach.vercel.app/allProducts/${params.id}`
          ),
      },
      {
        path: "updateProducts/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://automotive-server-side-peach.vercel.app/allProducts/${params.id}`
          ),
      },
    ],
  },
]);
