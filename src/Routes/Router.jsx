import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyCart from "../MyCart/MyCart";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductsDetails/ProductDetails";
import Root from "../Root/Root";
import UpdateProduct from "../UpdateProducts/UpdateProduct";

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
            {" "}
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
