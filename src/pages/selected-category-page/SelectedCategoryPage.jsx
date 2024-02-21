// Import necessary modules and components
import { useParams } from "react-router-dom";
import ProductList from "../../components/product-List/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../redux/reducers/productReducer";
import "./SelectedCategoryPage.css";
import { useEffect, useState } from "react";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";

// Component for selected category page
export default function SelectedCategoryPage() {
  const { categoryName } = useParams(); //Get the category name parameter from the URL
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions

  //Selector for products in specific category
  const specificCategoryArray = useSelector(
    (state) => state.products.specificCategoryArray
  );

  // Selector for checking if products in specific category are pending
  const specificCategoryArrayPending = useSelector(
    (state) => state.products.specificCategoryArrayPending
  );

  // Side effect to fetch products by category on component mount
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
