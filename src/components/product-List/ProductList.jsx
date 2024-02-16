import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../product-card/ProductCard";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";
import { useState } from "react";

export default function ProductList({ ProductArray }) {
  const dispatch = useDispatch();
  dispatch(getAllCartProduct);
  const cartArray = useSelector((state) => state.cart.cartArray);

  return (
    <div className="row">
      {ProductArray.map((product, index) => {
        return (
          <ProductCard
            key={index}
            product={product}
            cartArray={cartArray}
          />
        );
      })}
    </div>
  );
}
