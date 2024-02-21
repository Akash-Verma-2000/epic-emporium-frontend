// Import necessary modules and styles
import { useDispatch } from "react-redux"; // Hook for dispatching actions
import "./MessageBar.css"; // Styles for the message bar component
import { resetVendorNotification } from "../../redux/reducers/vendorReducer"; // Action to reset vendor notifications
import { resetVendorDashboardNotification } from "../../redux/reducers/vendorDashboardReducer"; // Action to reset vendor dashboard notifications
import { resetCustomerNotification } from "../../redux/reducers/customerReducer"; // Redux action related to customer

// Component for displaying a message bar with a notification text
export default function MessageBar({ text }) {
  // Access the dispatch function from Redux store
  const dispatch = useDispatch();

  // Automatically reset notifications after 3 seconds
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
