import { useDispatch } from "react-redux";
import { increaseQuantity } from "../../redux/reducers/cartReducer";
import "./Button.css";

export default function IncreaseButton({productID}) {
  
  const dispatch = useDispatch();
  
  
  
  return (
    <>
      <button
        className="quantity-btn"
        onClick={(e) => {
          e.preventDefault();
          console.log("INCREAMENT CALLED")
          dispatch(increaseQuantity(productID));
        }}
      >
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </>
  );
}
