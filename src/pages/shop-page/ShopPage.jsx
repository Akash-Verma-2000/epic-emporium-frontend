import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/product-List/ProductList";
import { getAllProducts } from "../../redux/reducers/productReducer";
import { useEffect } from "react";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import SearchBar from "../../components/search-bar/SearchBar";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";

export default function ShopPage() {
  const productsArrayPending = useSelector(
    (state) => state.products.productsArrayPending
  );

  const filteredProductArray = useSelector(
    (state) => state.products.filteredProductArray
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <div className="container">
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
