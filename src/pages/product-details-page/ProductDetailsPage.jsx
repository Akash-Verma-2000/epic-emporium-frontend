// Import necessary modules and components
import { Link, useParams } from "react-router-dom";
import { getProductByID } from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import Button from "../../components/button/Button";
import "./ProductDetailsPage.css";

// Component for product details page
export default function ProductDetailsPage() {
  const { _id } = useParams(); // Get the ID parameter from the URL
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions

  // Side effect to fetch product details by ID on component mount
  useEffect(() => {
    dispatch(getProductByID(_id));
  }, []);

  // Selector for single product details
  const singleProductDetails = useSelector(
    (state) => state.products.singleProductDetails
  );

  // Selector for checking if single product details are pending
  const singleProductDetailsPending = useSelector(
    (state) => state.products.singleProductDetailsPending
  );

  // Selector for checking if customer is logged in
  const isCustomerLoggedIn = useSelector(
    (state) => state.customers.isCustomerLoggedIn
  );

  // Selector for checking if vendor is logged in
  const isVendorLoggedIn = useSelector(
    (state) => state.vendors.isVendorLoggedIn
  );

  return (
    <div className="container product-details-page">
      {!singleProductDetailsPending ? (
        <div className="row p-5">
          <div className="col-md-4">
            <img className="img-fluid" src={singleProductDetails.image} />
          </div>
          <div className="col-md-8 ps-5">
            <h2 className="text-primary pb-5">{singleProductDetails.title}</h2>
            <h3>$ {singleProductDetails.price}</h3>
            <h5>Category: {singleProductDetails.category}</h5>
            <p>{singleProductDetails.description}</p>

            {isCustomerLoggedIn ? (
              <Button color={"primary"} text={"Add to cart"} />
            ) : null}

            {isVendorLoggedIn ? (
              <>
                <Link to={`/vendor/dashboard/edit-product/${_id}`}>
                  <Button text={"Update"} color={"primary"} />
                </Link>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <PageLoadingAnimation />
      )}
    </div>
  );
}
