// Import necessary modules and components
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/product-List/ProductList";
import { getAllProducts } from "../../redux/reducers/productReducer";
import { useEffect } from "react";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import SearchBar from "../../components/search-bar/SearchBar";
import "./ShopPage.css";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";

// Component for shop page
export default function ShopPage() {
  // Selector for checking if products array is pending
  const productsArrayPending = useSelector(
    (state) => state.products.productsArrayPending
  );

  // Selector for filtered product array
  const filteredProductArray = useSelector(
    (state) => state.products.filteredProductArray
  );

  // useDispatch hook for dispatching actions
  const dispatch = useDispatch();

  // Dispatch action to get all cart products
  dispatch(getAllCartProduct());

  // Side effect to get all products on component mount
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <div className="container shop-page">
        <SearchBar />

        <h2 className="text-primary text-center">Explore Our Full Range</h2>
        <hr />
        {!productsArrayPending ? (
          <ProductList ProductArray={filteredProductArray} />
        ) : (
          <PageLoadingAnimation />
        )}
      </div>
    </>
  );
}
