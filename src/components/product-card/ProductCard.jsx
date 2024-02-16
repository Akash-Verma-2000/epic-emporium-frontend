import "./ProductCard.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import {
  addToCart,
  getAllCartProduct,
  removeFromCart,
} from "../../redux/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DecreaseButton from "../button/DecreaseButton";
import IncreaseButton from "../button/IncreaseButton";
// Functional component for rendering product cards
export default function ProductCard({ product, cartArray }) {
  const dispatch = useDispatch();

  function addToCartButtonHandler() {
    dispatch(addToCart(product._id));
  }

  function removeFromCartButtonHandler() {
    dispatch(removeFromCart(product._id));
  }

  let isCartProduct = false;

  function isPresentInCart() {
    isCartProduct = cartArray.find((p) => p._id == product._id);
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

            {isCartProduct ? (
              <div className="d-flex justify-content-around">
                <DecreaseButton productID={product._id}/>
                <p className="fs-5 fw-semibold mt-2">{product.quantity}</p>
                <IncreaseButton productID={product._id} />
              </div>
            ) : null}

            <h4 className="card-text my-3">$ {product.price}</h4>
          </div>

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
        </div>
      </div>
    </>
  );
}
