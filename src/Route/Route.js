import { createBrowserRouter } from "react-router-dom";
import DashboardLayOut from "../layout/DashboardLayOut";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Products from "../Pages/Category/Products";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myorders from "../Pages/Dashboard/Myorders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AdminRoute from "./AdminRoute";
import Notfound from "./Notfound";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://perterbilt-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayOut></DashboardLayOut>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Myorders></Myorders>,
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Notfound></Notfound> },
]);

export default router;
