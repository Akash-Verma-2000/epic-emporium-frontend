// Import necessary modules and components
import { useDispatch, useSelector } from "react-redux";
import { getVendorProduct } from "../../redux/reducers/vendorDashboardReducer";
import { useEffect } from "react";
import ProductList from "../../components/product-List/ProductList";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import "./VendorDashboard.css";

// Component for vendor dashboard
export default function VendorDashboard() {
  const dispatch = useDispatch(); // useDispatch hook for dispatching actions

  // Side effect to get vendor products on component mount
  useEffect(() => {
    dispatch(getVendorProduct());
  }, []);

  // Selector for vendor product array
  const vedorProductArray = useSelector(
    (state) => state.vendorDashboard.vedorProductArray
  );

   // Selector for checking if vendor product array is pending
  const vedorProductPending = useSelector(
    (state) => state.vendorDashboard.vedorProductPending
  );
  return (
    <>
      <div className="container vendor-dashboard-page">
        <h2 className="text-primary mt-5 text-center">Vendor Dashboard</h2>
        <hr />
        {vedorProductPending ? <PageLoadingAnimation /> : null}

        <ProductList ProductArray={vedorProductArray} />
      </div>
    </>
  );
}
