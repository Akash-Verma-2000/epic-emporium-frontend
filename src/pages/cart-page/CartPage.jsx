import { useDispatch, useSelector } from "react-redux";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";
import { useEffect } from "react";
import ProductList from "../../components/product-List/ProductList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./CartPage.css";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";

export default function CartPage() {
  const dispatch = useDispatch();
  const getAllCartProductPending = useSelector(
    (state) => state.cart.getAllCartProductPending
  );
  const cartArray = useSelector((state) => state.cart.cartArray);

  useEffect(() => {
    dispatch(getAllCartProduct());
  }, []);

  console.log("CART ARRAY =>", cartArray);
  return (
    <>
      <div className="container cart-page ">
        <h2 className="text-primary mt-5 text-center">
          Review Your Selections
        </h2>
        <hr />
        {!getAllCartProductPending ? (
          <>
            {cartArray.length ? (
              <Link to={"/checkout"}>
                <Button text={"Checkout"} color={"primary"} />
              </Link>
            ) : null}

            <ProductList ProductArray={cartArray} isCartPage={true}/>
          </>
        ) : (
          <PageLoadingAnimation />
        )}
      </div>
    </>
  );
}
