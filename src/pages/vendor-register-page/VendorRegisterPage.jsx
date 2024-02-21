// Import necessary modules and components
import { useState } from "react";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../../components/button/LoadingButton";
import MessageBar from "../../components/message-bar/MessageBar";
import FormTabs from "../../components/form-tabs/FormTabs";
import { vendorSignup } from "../../redux/reducers/vendorReducer";

// Component for vendor register page
export default function VendorRegisterPage() {
  const [showVisibility, setshowVisibility] = useState(false); // State variable for showing password visibility
  const [passwordInputType, setPasswordInputType] = useState("password"); // State variable for password input type

  // State variable for vendor name, email, and password
  const [vendorObj, setVendorObj] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Selector for message from the redux store
  const message = useSelector((state) => state.vendors.message);

  // useDispatch hook for dispatching actions
  const dispatch = useDispatch();

  // Selector for checking if vendor signup is pending
  const vendorSignupPending = useSelector(
    (state) => state.vendors.vendorSignupPending
  );

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

  // Function to handle vendor signup form submission
  function signupFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(vendorSignup(vendorObj));
  }

  return (
    <div className="login-page">
      <div className="container">
        {message ? <MessageBar text={message.message} /> : null}

        <div className="row">
          <div className="col-md-5  form-section">
            <form
              onSubmit={signupFormSubmitHandler}
              className="px-3 py-5 rounded-4 shadow"
            >
              <FormTabs
                link1={"/vendor/login"}
                link2={"/vendor/register"}
                link3={"/vendor/forget-password"}
              />
              <h3 className="text-light text-center mb-3">Vendor Register</h3>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputName"
                  className="form-label text-light"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control mb-3"
                  id="exampleInputName"
                  value={vendorObj.name}
                  onChange={(e) => {
                    setVendorObj({ ...vendorObj, name: e.target.value });
                  }}
                  required
                />

                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-light"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={vendorObj.email}
                  onChange={(e) => {
                    setVendorObj({ ...vendorObj, email: e.target.value });
                  }}
                  required
                />
                <div id="emailHelp" className="form-text text-light">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <label htmlFor="new-password" className="form-label text-light">
                Password
              </label>
              <div className="input-group mb-3">
                <input
                  type={passwordInputType}
                  id="new-password"
                  className="form-control"
                  placeholder="Enter new password"
                  onChange={(e) => {
                    setVendorObj({
                      ...vendorObj,
                      password: e.target.value,
                    });
                  }}
                  required
                />

                {showVisibility ? (
                  <button
                    className="btn bg-primary text-light"
                    type="button"
                    id="button-addon2"
                    onClick={hidePassword}
                  >
                    <i className="bi bi-eye-slash"></i> Hide
                  </button>
                ) : (
                  <button
                    className="btn bg-primary text-light"
                    type="button"
                    id="button-addon2"
                    onClick={showPassword}
                  >
                    <i className="bi bi-eye"></i> Show
                  </button>
                )}
              </div>

              {!vendorSignupPending ? (
                <Button color={"primary"} text={"Register"} />
              ) : (
                <LoadingButton />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
