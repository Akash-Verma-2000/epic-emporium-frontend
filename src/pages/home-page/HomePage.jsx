import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchProducts,
  selectAllProducts,
} from "../../redux/reducers/productReducer";

import Banner from "../../images/Banner.jpg";
import Carousel from "../../components/Carousel/Carousel";
import ProductList from "../../components/product-List/ProductCard";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";

export default function HomePage() {
  const ProductArray = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the action to fetch products when component mounts
  }, [dispatch]);

  return (
    <>
      {ProductArray.length ? (
        <>
          <img src={Banner} className="img-fluid" alt="" />
          <Carousel />
          <div className="container">
            <h2 className="text-primary mt-5">Find Everything We Offer</h2>
            <hr />

            <ProductList ProductArray={ProductArray} />
          </div>
        </>
      ) : (
        <PageLoadingAnimation />
      )}
    </>
  );
}
