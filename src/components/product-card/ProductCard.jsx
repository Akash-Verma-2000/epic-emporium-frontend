//Importing the neccessary modules and components
import "./ProductCard.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import DecreaseButton from "../button/DecreaseButton";
import IncreaseButton from "../button/IncreaseButton";
import { deleteProduct } from "../../redux/reducers/vendorDashboardReducer";
import DeleteButton from "../button/DeleteButton";
import UpdateButton from "../button/UpdateButton";
import { getAllProducts } from "../../redux/reducers/productReducer";

// Functional component for rendering product cards
export default function ProductCard({ product, isCartPage = false }) {
  // Initializing dispatch function
  const dispatch = useDispatch();

  // Selecting cartArray from Redux store
  const cartArray = useSelector((state) => state.cart.cartArray);

  //Flag to check if the product is present in the cart or not
  let isCartProduct = false;

  // Selecting isCustomerLoggedIn state from Redux store
  const isCustomerLoggedIn = useSelector(
    (state) => state.customers.isCustomerLoggedIn
  );

  // Selecting isVendorLoggedIn state from Redux store
  const isVendorLoggedIn = useSelector(
    (state) => state.vendors.isVendorLoggedIn
  );

  // Function to handle adding product to cart
  function addToCartButtonHandler() {
    dispatch(addToCart(product._id));
    dispatch(getAllProducts());
  }

  // Function to handle removing product from cart
  function removeFromCartButtonHandler() {
    dispatch(removeFromCart(product._id));
  }

  // Function to handle deleting a product
  function deleteProductHandler() {
    dispatch(deleteProduct(product._id));
  }

  // Function to check if product is present in cart
  function isPresentInCart() {
    isCartProduct = cartArray?.find((p) => p._id == product._id);
  }

  isPresentInCart();

  return (
    <>
      <div className="col-6 col-md-3 my-3 ">
        <div className="card p-1">
          <Link to={`/product-details/${product._id}`}>
            <img
              src={product.image}
              className="card-img-top "
              alt="product Image"
            />
          </Link>
          <div className="card-body">
            <p className="card-title">{product.title}</p>

            {isCustomerLoggedIn ? (
              <>
                {isCartProduct && isCartPage ? (
                  <div className="d-flex justify-content-around">
                    <DecreaseButton productID={product._id} />
                    <p className="fs-5 fw-semibold mt-2">{product.quantity}</p>
                    <IncreaseButton productID={product._id} />
                  </div>
                ) : null}
              </>
            ) : null}

            <h4 className="card-text my-3">$ {product.price}</h4>
            {isVendorLoggedIn ? (
              <>
                {/* /vendor/dashboard/edit-product/:_id */}
                <Link to={`/vendor/dashboard/edit-product/${product._id}`}>
                  <UpdateButton />
                </Link>

                <DeleteButton fn={deleteProductHandler} />
              </>
            ) : null}
          </div>
          {isCustomerLoggedIn ? (
            <>
              {!isCartProduct ? (
                <Button
                  text={"Add to cart"}
                  color={"primary"}
                  fn={addToCartButtonHandler}
                />
              ) : (
                <Button
                  text={"Remove from cart"}
                  color={"danger"}
                  fn={removeFromCartButtonHandler}
                />
              )}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
