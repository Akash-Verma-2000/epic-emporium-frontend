import { useParams } from "react-router-dom";
import { getProductByID } from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import Button from "../../components/button/Button";

export default function ProductDetailsPage() {
  const { _id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByID(_id));
  }, []);

  const singleProductDetails = useSelector(
    (state) => state.products.singleProductDetails
  );
  const singleProductDetailsPending = useSelector(
    (state) => state.products.singleProductDetailsPending
  );

  return (
    <div className="container">
      {!singleProductDetailsPending ? (
        <div className="row p-5">
          <div className="col-md-4">
            <img className="img-fluid" src={singleProductDetails.image} />
          </div>
          <div className="col-md-8 ps-5">
            <h2 className="text-primary pb-5">{singleProductDetails.title}</h2>
            <h3>$ {singleProductDetails.price}</h3>
            <h5>Category: {singleProductDetails.category}</h5>
            <p>{singleProductDetails.description}</p>
            <Button color={"primary"} text={"Add to cart"}/>
          </div>
        </div>
      ) : (
        <PageLoadingAnimation />
      )}
    </div>
  );
}
