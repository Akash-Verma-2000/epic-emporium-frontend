# Epic Emporium

Our React.js E-Commerce Platform offers a streamlined shopping experience for both customers and vendors. With intuitive interfaces, secure authentication, and efficient product management powered by Redux Toolkit, I've simplified online commerce. Whether you're browsing products or managing inventory, our platform provides a seamless solution for your e-commerce needs.

## Technologies Used

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)


### Steps to Setup

1. Clone the repository **`git clone <URL>`**
2. Install dependencies **`npm install`**
3. Run the server from the index.js file **`npm start`**

## Features

- ### User

  - #### Customer:
    - Customer Registration.
    - Customer Login.
    - Sending OTP for password reset.
    - Verifying the OTP.
    - Reseting the password.
  - #### Customer:
    - Vendor Registration.
    - Vendor Login.
    - Sending OTP for password reset.
    - Verifying the OTP.
    - Reseting the password.

- ### Products

  - Fetch all products.
  - Fetch single product details.
  - Fetch products by category.
  - Fetch products of logged in vendor.
  - Add product.
  - Delete product.
  - Update product.
  - Filter products by price and category.

- ### Cart

  - Add to cart
  - Remove from cart
  - Increase quantity
  - Decrease quantity
  - Fetch all cart products

- ### Checkout

  - Place orders


## Project Structure

- **`public`**: All the public files are here.
- **`src`**: 
    - **`components`**
        - **`button`**
            - **`Button.css`**
            - **`Button.jsx`**
            - **`DecreaseButton.jsx`**
            - **`IncreaseButton.jsx`**
            - **`LoadingButton.jsx`**
            - **`UpdateButton.jsx`**
        - **`Carousel`** 
            - **`Carousel.css`**
            - **`Carousel.jsx`**
        - **`category-section`**
            - **`CategoryBlock.css`**
            - **`CategoryBlock.jsx`**
        - **`footer`**
            - **`Footer.jsx`**
        - **`form-tabs`**
            - **`FormTabs.css`**
            - **`FormTabs.jsx`**
        - **`Loading-animation`**
            - **`LoadingPageAnimation.jsx`**
        - **`message-bar`**
            - **`MessageBar.css`**
            - **`MessageBar.jsx`**
        - **`nav-bar`**
            - **`NavBar.css`**
            - **`NavBar.jsx`**
        - **`product-card`**
            - **`ProductCard.css`**
            - **`ProductCard.jsx`**
        - **`product-List`**
            - **`ProductList.jsx`**
        - **`search-bar`**
            - **`SearchBar.jsx`**
    - **`images`**
    - **`pages`**
        - **`add-product-page`**
            - **`AddProductPage.jsx`**
        - **`cart-page`**
            - **`CartPage.css`**
            - **`CartPage.jsx`**
        - **`checkout-page`**
            - **`CheckoutPage.jsx`**
        - **`customer-forget-password`**
            - **`CustomerForgetPassword.jsx`**
        - **`customer-login-page`**
            - **`CustomerLoginPage.jsx`**
        - **`customer-register-page`**
            - **`CustomerRegisterPage.css`**
            - **`CustomerRegisterPage.jsx`**
        - **`edit-product-page`**
            - **`EditProductPage.css`**
            - **`EditProductPage.jsx`**
        - **`home-page`**
            - **`HomePage.css`**
            - **`HomePage.jsx`**
        - **`product-details-page`**
            - **`ProductDetailsPage.css`**
            - **`ProductDetailsPage.jsx`**
        - **`selected-category-page`**
            - **`SelectedCategoryPage.css`**
            - **`SelectedCategoryPage.jsx`**
        - **`shop-page`**
            - **`ShopPage.css`**
            - **`ShopPage.jsx`**
        - **`vendor-dashboard`**
            - **`VendorDashboard.css`**
            - **`VendorDashboard.jsx`**
        - **`vendor-forget-password`**
            - **`VendorForgetPassword.jsx`**
        - **`vendor-login-page`**
            - **`VendorLoginPage.jsx`**
        - **`vendor-register-page`**
            - **`VendorRegisterPage.jsx`**
    - **`redux`**
        - **`reducers`**
            - **`cartReducer.js`**
            - **`customerReducer.js`**
            - **`productReducer.js`**
            - **`vendorDashboardReducer.js`**
            - **`vendorReducer.js`**
        - **`store`**
            - **`store.js`**
    - **`App.js`**
    - **`index.css`**
    - **`index.js`**
- **`gitignore`**
- **`package-lock.json`**
- **`package.json`**

## Author

Akash Verma

## Contact me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akash-verma-09aug2000/) [![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/Akash_Verma2000/) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:akash.verma217112@gmail.com)
[![Naukari](https://img.shields.io/badge/Naukri.com-0A66C2?style=for-the-badge&logo=Naukri.com&logoColor=white)](https://www.naukri.com/mnjuser/profile)

## License

This project is licensed under the ISC License.
