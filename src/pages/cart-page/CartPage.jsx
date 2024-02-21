import { useDispatch, useSelector } from "react-redux";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";
import { useEffect } from "react";
import ProductList from "../../components/product-List/ProductList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./CartPage.css";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";

export default function CartPage() {
  // Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const getAllCartProductPending = useSelector(
    (state) => state.cart.getAllCartProductPending
  );
  const cartArray = useSelector((state) => state.cart.cartArray);

  // Effect hook to fetch all cart products when the component mounts
  useEffect(() => {
    dispatch(getAllCartProduct());
  }, []);

  return (
    <>
      <div className="container cart-page ">
        {/* Title for the cart page */}
        <h2 className="text-primary mt-5 text-center">
          Review Your Selections
        </h2>
        <hr />

        {/* Conditional rendering based on whether products are being fetched */}
        {!getAllCartProductPending ? (
          <>
            {/* Conditionally rendering the Checkout button */}
            {cartArray.length ? (
              <Link to={"/checkout"}>
                <Button text={"Checkout"} color={"primary"} />
              </Link>
            ) : null}

            {/* Rendering the product list component */}
            <ProductList ProductArray={cartArray} isCartPage={true} />
          </>
        ) : (
          // Rendering a loading animation while products are being fetched
          <PageLoadingAnimation />
        )}
      </div>
    </>
  );
}
