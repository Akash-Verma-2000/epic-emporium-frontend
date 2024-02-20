import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/reducers/productReducer";
import "./HomePage.css"
import Banner from "../../images/Banner.jpg";
import Carousel from "../../components/Carousel/Carousel";
import ProductList from "../../components/product-List/ProductList";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import CategoryBlock from "../../components/category-section/CategoryBlock";
import { useNavigate } from "react-router-dom";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";

export default function HomePage() {
  const productsArrayPending = useSelector(
    (state) => state.products.productsArrayPending
  );
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const isVendorLoggedIn=useSelector((state)=>state.vendors.isVendorLoggedIn);
  const productArray = useSelector((state) => state.products.productsArray);

  
  dispatch(getAllCartProduct());
  if(isVendorLoggedIn){
      navigate("/vendor/dashboard")
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="home-page">
      {!productsArrayPending ? (
        <>
          <img src={Banner} className="img-fluid" alt="banner" />
          <Carousel />
          <div className="container">
            <CategoryBlock />

            <h2 className="text-primary mt-5 text-center">
              Find Everything We Offer
            </h2>
            <hr />

            <ProductList ProductArray={productArray} />
 
          </div>
        </>
      ) : (
        <PageLoadingAnimation />
      )}
    </div>
  );
}
