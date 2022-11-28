import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Blog from "../../pages/Blog/Blog";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../../pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Products from "../../pages/Products/Products/Products";
import Register from "../../pages/Register/Register";
import BuyerRoutes from "../BuyerRoutes/BuyerRoutes";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => {
          return axios.get(
            "https://resales-utopia-server.vercel.app/categories"
          );
        },
        element: <Home></Home>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/addproduct",
        loader: () => {
          return axios.get(
            `https://resales-utopia-server.vercel.app/categories/names`
          );
        },
        element: (
          <SellerRoutes>
            <AddProduct></AddProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/myproducts",
        element: (
          <SellerRoutes>
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/myorders",
        element: (
          <BuyerRoutes>
            <MyOrders></MyOrders>
          </BuyerRoutes>
        ),
      },

      {
        path: "/mybuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/allBuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/reportedItems",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
