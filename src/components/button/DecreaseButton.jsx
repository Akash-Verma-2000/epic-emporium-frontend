import { useDispatch } from "react-redux";
import "./Button.css";
import { decreaseQuantity } from "../../redux/reducers/cartReducer";

export default function DecreaseButton({productID}) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="quantity-btn"
        onClick={(e) => {
          e.preventDefault();
          dispatch(decreaseQuantity(productID));
        }}
      >
        <i className="bi bi-dash-circle-fill"></i>
      </button>
    </>
  );
}
