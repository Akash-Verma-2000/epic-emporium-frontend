import { useDispatch, useSelector } from "react-redux";
import { getVendorProduct } from "../../redux/reducers/vendorDashboardReducer";
import { useEffect } from "react";
import ProductList from "../../components/product-List/ProductList";
import PageLoadingAnimation from "../../components/loading-animation/PageLoadingAnimation";
import "./VendorDashboard.css"

export default function VendorDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVendorProduct());
  }, []);
  const vedorProductArray = useSelector(
    (state) => state.vendorDashboard.vedorProductArray
  );

  const vedorProductPending = useSelector(
    (state) => state.vendorDashboard. vedorProductPending
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
