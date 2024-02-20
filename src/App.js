import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store/store";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import CartPage from "./pages/cart-page/CartPage";
import CustomerLoginPage from "./pages/customer-login-page/CustomerLoginPage";
import CustomerRegisterPage from "./pages/customer-register-page/CustomerRegisterPage";
import ShopPage from "./pages/shop-page/ShopPage";
import ProductDetailsPage from "./pages/product-details-page/ProductDetailsPage";
import CustomerForgetPassword from "./pages/customer-forget-password/CustomerForgetPassword";
import VendorLoginPage from "./pages/vendor-login-page/vendorLoginPage";
import VendorRegisterPage from "./pages/vendor-register-page/VendorRegisterPage";
import VendorForgetPassword from "./pages/vendor-forget-password/VendorForgetPassword";
import VendorDashboard from "./pages/vendor-dashboard/VendorDashboard";
import AddProductPage from "./pages/add-product-page/AddProductPage";
import EditProductPage from "./pages/edit-product-page/EditProductPage";
import SelectedCategoryPage from "./pages/selected-category-page/SelectedCategoryPage";
import Footer from "./components/footer/Footer";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";
import { getAllCartProduct } from "./redux/reducers/cartReducer";

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
        path: "/category/:categoryName",
        element: <SelectedCategoryPage />
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
      },
      {
        path: "/vendor/login",
        element: <VendorLoginPage />
      },
      {
        path: "/vendor/register",
        element: <VendorRegisterPage />
      },
      {
        path: "/vendor/forget-password",
        element: <VendorForgetPassword />
      },
      {
        path: "/vendor/dashboard",
        element: <VendorDashboard />
      },
      {
        path: "/vendor/dashboard/add-product",
        element: <AddProductPage />
      },
      {
        path: "/vendor/dashboard/edit-product/:_id",
        element: <EditProductPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      }
      ]
    }

  ]
  )

  return <>
    <Provider store={store}>

      <RouterProvider router={browserRouter} />
      <Footer />

    </Provider>
  </>
}