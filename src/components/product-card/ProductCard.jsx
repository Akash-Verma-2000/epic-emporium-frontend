import "./ProductCard.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/reducers/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../button/LoadingButton";
// Functional component for rendering product cards
export default function ProductCard({ product}) {
  const dispatch = useDispatch();
  function addToCartButtonHandler() {
    dispatch(addToCart(product._id));
  }

  const addToCartPending = useSelector((state) => state.cart.addToCartPending);

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

            <h4 className="card-text my-3">$ {product.price}</h4>
          </div>




         







          {addToCartPending ? (
            <LoadingButton />
          ) : (
            <Button
              text={"Add to cart"}
              color={"primary"}
              fn={addToCartButtonHandler}
            />
          )}
        </div>
      </div>
    </>
  );
}
