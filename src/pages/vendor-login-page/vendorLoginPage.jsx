// Import necessary modules and components
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoadingButton from "../../components/button/LoadingButton";
import MessageBar from "../../components/message-bar/MessageBar";
import FormTabs from "../../components/form-tabs/FormTabs";
import { vendorSignin } from "../../redux/reducers/vendorReducer";
import { useNavigate } from "react-router-dom";

// Component for vendor login page
export default function VendorLoginPage() {
  // Component state variables
  const [vendorObj, setVendorObj] = useState({ email: "", password: "" }); // State variable for vendor email and password
  const [showVisibility, setshowVisibility] = useState(false); // State variable for showing password visibility
  const [passwordInputType, setPasswordInputType] = useState("password"); // State variable for password input type

  const dispatch = useDispatch(); // useDispatch hook for dispatching actions
  const message = useSelector((state) => state.vendors.message); // Selector for message from the redux store

  // Selector for checking if vendor is logged in
  const isVendorLoggedIn = useSelector(
    (state) => state.vendors.isVendorLoggedIn
  );

  // Selector for checking if vendor signin is pending
  const vendorSigninPending = useSelector(
    (state) => state.vendors.vendorSigninPending
  );

  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to show password
  function showPassword() {
    setshowVisibility(true);
    setPasswordInputType("text");
  }

  // Function to hide password
  function hidePassword() {
    setshowVisibility(false);
    setPasswordInputType("password");
  }

  // Function to handle vendor login form submission
  function signinFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(vendorSignin(vendorObj));
  }

  // Effect hook to redirect to vendor dashboard if vendor is logged in
  useEffect(() => {
    if (isVendorLoggedIn) {
      console.log("IS VENDOR LOGGED IN IF BLOCK =>", isVendorLoggedIn);
      navigate("/vendor/dashboard");
    }
  }, [isVendorLoggedIn]);

  return (
    <div className="login-page">
      <div className="container">
        {message ? <MessageBar text={message} /> : null}

        <div className="row">
          <div className="col-md-5  form-section">
            <form className="px-3 py-5 rounded-4 shadow">
              <FormTabs
                link1={"/vendor/login"}
                link2={"/vendor/register"}
                link3={"/vendor/forget-password"}
              />
              <h3 className="text-light text-center mb-3">Vendor Login</h3>
              <div className="my-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-light"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={vendorObj.email}
                  onChange={(e) => {
                    setVendorObj({ ...vendorObj, email: e.target.value });
                  }}
                />
                <div id="emailHelp" className="form-text text-light">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div>
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-light"
                >
                  Password
                </label>
                <div class="input-group mb-3">
                  <input
                    type={passwordInputType}
                    id="new-password"
                    class="form-control"
                    placeholder="Enter your password"
                    value={vendorObj.password}
                    onChange={(e) => {
                      setVendorObj({
                        ...vendorObj,
                        password: e.target.value,
                      });
                    }}
                  />

                  {showVisibility ? (
                    <button
                      class="btn bg-primary text-light"
                      type="button"
                      id="button-addon2"
                      onClick={hidePassword}
                    >
                      <i class="bi bi-eye-slash"></i> Hide
                    </button>
                  ) : (
                    <button
                      class="btn bg-primary text-light"
                      type="button"
                      id="button-addon2"
                      onClick={showPassword}
                    >
                      <i class="bi bi-eye"></i> Show
                    </button>
                  )}
                </div>
              </div>

              {vendorSigninPending ? (
                <LoadingButton />
              ) : (
                <Button
                  fn={signinFormSubmitHandler}
                  color={"primary"}
                  text={"Login"}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
