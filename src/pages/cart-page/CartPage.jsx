import { useDispatch, useSelector } from "react-redux";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";
import { useEffect } from "react";
import ProductList from "../../components/product-List/ProductList";

export default function CartPage() {
  const dispatch = useDispatch();

  const cartArray = useSelector((state) => state.cart.cartArray);

  useEffect(() => {
    dispatch(getAllCartProduct());
  }, []);

  return (
    <>
      <div className="container">
      <h2 className="text-primary mt-5 text-center">Review Your Selections</h2>
            <hr />
        <ProductList ProductArray={cartArray} />
      </div>
    </>
  );
}
