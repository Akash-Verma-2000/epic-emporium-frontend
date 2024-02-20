import { useDispatch } from "react-redux";
import "./MessageBar.css";
import { resetVendorNotification } from "../../redux/reducers/vendorReducer";
import { resetVendorDashboardNotification } from "../../redux/reducers/vendorDashboardReducer";
import { resetCustomerNotification } from "../../redux/reducers/customerReducer";
export default function MessageBar({ text }) {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(resetVendorNotification());
    dispatch(resetVendorDashboardNotification());
    dispatch(resetCustomerNotification());
  }, 3000);

  return (
    <>
      <div
        className="message-bar alert alert-primary position-fixed top-0 z-3 start-50 translate-middle-x"
        role="alert"
      >
        {text}
      </div>
    </>
  );
}
