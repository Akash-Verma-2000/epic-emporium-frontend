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
export default function ProductCard({ product , isCartPage=false}) {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.cartArray);
  let isCartProduct = false;
  const isCustomerLoggedIn = useSelector(
    (state) => state.customers.isCustomerLoggedIn
  );

  const isVendorLoggedIn = useSelector(
    (state) => state.vendors.isVendorLoggedIn
  );
  function addToCartButtonHandler() {
    dispatch(addToCart(product._id));
    dispatch(getAllProducts());
  }

  function removeFromCartButtonHandler() {
    dispatch(removeFromCart(product._id));
  }

  function deleteProductHandler() {
    dispatch(deleteProduct(product._id));
  }

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
                {isCartProduct&&isCartPage ? (
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
