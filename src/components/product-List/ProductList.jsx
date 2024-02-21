//Importing the necessary modules and components
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../product-card/ProductCard";
import { getAllCartProduct } from "../../redux/reducers/cartReducer";
import MessageBar from "../message-bar/MessageBar";

//Component for rendering the list of the products 
export default function ProductList({ ProductArray ,isCartPage=false}) {
  const dispatch = useDispatch();
  dispatch(getAllCartProduct);
  const cartArray = useSelector((state) => state.cart.cartArray);

  const message = useSelector((state) => state.vendorDashboard.message);

  return (
    <div className="row">
      {message ? <MessageBar text={message} /> : null}

      {ProductArray?.map((product, index) => {
        return (
          <ProductCard key={index} product={product} cartArray={cartArray}  isCartPage={isCartPage}/>
        );
      })}
    </div>
  );
}
