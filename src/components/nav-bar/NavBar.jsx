// Importing necessary components from react-router-dom library
import { Outlet, NavLink, useNavigate } from "react-router-dom";

// Importing LogoImage
import LogoImage from "../../images/LogoImage.jpg";

// Importing Button component
import Button from "../../components/button/Button";

// Importing CSS styles for NavBar
import "./NavBar.css";

// Importing useDispatch and useSelector hooks from react-redux library
import { useDispatch, useSelector } from "react-redux";

// Importing customerLogout action creator
import { customerLogout } from "../../redux/reducers/customerReducer";

// Importing vendorLogout action creator
import { vendorLogout } from "../../redux/reducers/vendorReducer";

export default function NavBar() {
  const dispatch = useDispatch(); // Initializing dispatch function
  const navigate = useNavigate(); // Initializing navigate function from useNavigate hook

  // Function to handle customer logout
  function customerLogoutHandler() {
    dispatch(customerLogout());
    navigate("/");
  }

  // Function to handle vendor logout
  function vendorLogoutHandler() {
    dispatch(vendorLogout());
    navigate("/");
  }

  const isCustomerLoggedIn = useSelector(
    (state) => state.customers.isCustomerLoggedIn
  );
  const isVendorLoggedIn = useSelector(
    (state) => state.vendors.isVendorLoggedIn
  );
  const cartArray = useSelector((state) => state.cart.cartArray);

  return (
    <>
      <nav className="z-3 navbar navbar-expand-lg bg-light border-bottom border-primary border-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img id="logo-img" src={LogoImage} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto">
              {!isVendorLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/"
                  >
                    <i className="bi bi-house-door"></i> Home
                  </NavLink>
                </li>
              ) : null}

              {!isVendorLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
              ) : null}

              {isCustomerLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/cart"
                  >
                    Cart ({cartArray?.length})
                  </NavLink>
                </li>
              ) : null}

              {!isCustomerLoggedIn && !isVendorLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/customer/login"
                  >
                    <Button text={"I'm a customer"} color={"primary"} />
                  </NavLink>
                </li>
              ) : null}

              {!isCustomerLoggedIn && !isVendorLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/vendor/login"
                  >
                    <Button text={"I'm a vendor"} color={"primary"} />
                  </NavLink>
                </li>
              ) : null}

              {isVendorLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    to="/vendor/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : null}

              {isVendorLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    to="/vendor/dashboard/add-product"
                  >
                    Add Product
                  </NavLink>
                </li>
              ) : null}

              {isVendorLoggedIn ? (
                <li className="nav-item nav-link">
                  <Button
                    text={"Logout"}
                    color={"danger"}
                    fn={vendorLogoutHandler}
                  />
                </li>
              ) : null}

              {isCustomerLoggedIn ? (
                <li className="nav-item nav-link">
                  <Button
                    text={"Logout"}
                    color={"danger"}
                    fn={customerLogoutHandler}
                  />
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
