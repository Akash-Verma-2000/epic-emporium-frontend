import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import CustomerLoginPage from "./pages/customer-login-page/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer-register-page/CustomerRegisterPage";
import ShopPage from "./pages/shop-page/ShopPage";
import ProductDetailsPage from "./pages/product-details-page/ProductDetailsPage";
import CustomerForgetPassword from "./pages/customer-forget-password/CustomerForgetPassword";

export default function App() {


  const browserRouter = createBrowserRouter([

    {
      path: "/",
      element: <NavBar />,
      children: [{
        path: "/",
        element: <HomePage />
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: "/product-details/:_id",
        element: <ProductDetailsPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/customer/login",
        element: <CustomerLoginPage />
      },
      {
        path: "/customer/register",
        element: <CustomerRegisterPage />
      },
      {
        path: "/customer/forget-password",
        element: <CustomerForgetPassword />
      }
      ]
    }

  ])

  return <>
    <Provider store={store}>

      <RouterProvider router={browserRouter} />

    </Provider>
  </>
}