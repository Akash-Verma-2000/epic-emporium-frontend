// Import necessary modules and components
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/reducers/productReducer";
import "./HomePage.css";
import Banner from "../../images/Banner.jpg";
import Carousel from "../../components/Carousel/Carousel";
import ProductList from "../../components/product-List/ProductList";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import CategoryBlock from "../../components/category-section/CategoryBlock";
import { useNavigate } from "react-router-dom";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";

export default function HomePage() {
  // Redux selectors
  const productsArrayPending = useSelector(
    (state) => state.products.productsArrayPending
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVendorLoggedIn = useSelector(
    (state) => state.vendors.isVendorLoggedIn
  );
  const productArray = useSelector((state) => state.products.productsArray);

  // Dispatch action to get all cart products
  dispatch(getAllCartProduct());

  // Redirect to vendor dashboard if vendor is logged in
  if (isVendorLoggedIn) {
    navigate("/vendor/dashboard");
  }

  // Side effect to get all products on component mount
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home-page">
      {!productsArrayPending ? (
        <>
          {/* Banner image */}
          <img src={Banner} className="img-fluid" alt="banner" />

          {/* Carousel component */}
          <Carousel />
          <div className="container">
            {/* Category block component */}
            <CategoryBlock />

            <h2 className="text-primary mt-5 text-center">
              Find Everything We Offer
            </h2>
            <hr />

            {/* Product list component */}
            <ProductList ProductArray={productArray} />
          </div>
        </>
      ) : (
        <PageLoadingAnimation />
      )}
    </div>
  );
}
