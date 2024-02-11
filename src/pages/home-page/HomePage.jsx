import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  productSelector,
} from "../../redux/reducers/productReducer";

import Banner from "../../images/Banner.jpg";
import Carousel from "../../components/Carousel/Carousel";
import ProductList from "../../components/product-List/ProductCard";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";

export default function HomePage() {

  

  const isProductFetched = useSelector(
    (state) => state.products.isProductFetched
  );
  const productArray = useSelector(
    (state) => state.products.productsArray
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      {isProductFetched ? (
        <>
          <img src={Banner} className="img-fluid" alt="" />
          <Carousel />
          <div className="container">
            <h2 className="text-primary mt-5">Find Everything We Offer</h2>
            <hr />

            <ProductList ProductArray={productArray} />
          </div>
        </>
      ) : (
        <PageLoadingAnimation />
      )}
    </>
  );
}
