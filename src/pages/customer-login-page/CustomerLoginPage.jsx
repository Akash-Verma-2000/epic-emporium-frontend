// Import necessary modules and components
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { customerSignin } from "../../redux/reducers/customerReducer";
import LoadingButton from "../../components/button/LoadingButton";
import MessageBar from "../../components/message-bar/MessageBar";
import FormTabs from "../../components/form-tabs/FormTabs";

export default function CustomerLoginPage() {
  // State variables using useState hook
  const [customerObj, setCustomerObj] = useState({ email: "", password: "" });
  const [showVisibility, setshowVisibility] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  // Redux hooks and state variables
  const dispatch = useDispatch();
  const message = useSelector((state) => state.customers.message);
  const customerSigninPending = useSelector(
    (state) => state.customers.customerSigninPending
  );
  const isCustomerLoggedIn = useSelector(
    (state) => state.customers.isCustomerLoggedIn
  );
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

  // Function to handle form submission
  function signinFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(customerSignin(customerObj));
  }

  // useEffect hook to handle redirection after successful login
  useEffect(() => {
    if (isCustomerLoggedIn) {
      navigate("/");
    }
  }, [isCustomerLoggedIn]);

  return (
    <div className="login-page">
      <div className="container">
        {message ? <MessageBar text={message} /> : null}

        <div className="row">
          <div className="col-md-5  form-section">
            <form className="px-3 py-5 rounded-4 shadow">
              {/* Render FormTabs component */}
              <FormTabs
                link1={"/customer/login"}
                link2={"/customer/register"}
                link3={"/customer/forget-password"}
              />
              <h3 className="text-light text-center mb-3">Customer Login</h3>
              <div className="my-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-light"
                >
                  Email address
                </label>

                {/* Email input field */}
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={customerObj.email}
                  onChange={(e) => {
                    setCustomerObj({ ...customerObj, email: e.target.value });
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

                  {/* Password input field */}
                  <input
                    type={passwordInputType}
                    id="new-password"
                    class="form-control"
                    placeholder="Enter your password"
                    value={customerObj.password}
                    onChange={(e) => {
                      setCustomerObj({
                        ...customerObj,
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

              {customerSigninPending ? (
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
