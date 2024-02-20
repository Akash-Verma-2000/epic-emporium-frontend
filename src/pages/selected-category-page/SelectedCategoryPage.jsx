import { useParams } from "react-router-dom";
import ProductList from "../../components/product-List/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../redux/reducers/productReducer";
import "./SelectedCategoryPage.css";
import { useEffect, useState } from "react";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";

export default function SelectedCategoryPage() {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const specificCategoryArray = useSelector(
    (state) => state.products.specificCategoryArray
  );
  const specificCategoryArrayPending = useSelector(
    (state) => state.products.specificCategoryArrayPending
  );

  useEffect(() => {
    dispatch(getProductByCategory(categoryName));
  }, []);

  return (
    <>
      <div className="container selected-category-page">
        <h2 className="text-primary mt-5 text-center">Browse Your Category</h2>
        <hr />
        {!specificCategoryArrayPending ? (
          <>
            {!specificCategoryArray.length ? (
              <h4 className="text-center">This category is empty</h4>
            ) : null}

            <ProductList ProductArray={specificCategoryArray} />
          </>
        ) : (
          <PageLoadingAnimation />
        )}
      </div>
    </>
  );
}
