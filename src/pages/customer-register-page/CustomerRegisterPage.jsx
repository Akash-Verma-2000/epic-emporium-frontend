// Import necessary modules and components
import { useState } from "react";
import "./CustomerRegisterPage.css";
import Button from "../../components/button/Button";
import { customerSignup } from "../../redux/reducers/customerReducer";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../../components/button/LoadingButton";
import MessageBar from "../../components/message-bar/MessageBar";
import FormTabs from "../../components/form-tabs/FormTabs";

export default function CustomerRegisterPage() {
  // State variables using useState hook
  const [showVisibility, setshowVisibility] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [customerObj, setCustomerObj] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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
  function signupFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(customerSignup(customerObj));
  }

  // Redux hooks
  const message = useSelector((state) => state.customers.message);
  const customerSignupPending = useSelector(
    (state) => state.customers.customerSignupPending
  );

  return (
    <div className="login-page">
      <div className="container">
        {message ? <MessageBar text={message.message} /> : null}

        <div className="row">
          <div className="col-md-5  form-section">
            <form
              className="px-3 py-5 rounded-4 shadow"
              onSubmit={signupFormSubmitHandler}
            >
              {/* Render FormTabs component */}
              <FormTabs
                link1={"/customer/login"}
                link2={"/customer/register"}
                link3={"/customer/forget-password"}
              />
              <h3 className="text-light text-center mb-3">Customer Register</h3>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputName"
                  className="form-label text-light"
                >
                  Name
                </label>

                {/* Name input field */}
                <input
                  name="name"
                  type="text"
                  className="form-control mb-3"
                  id="exampleInputName"
                  value={customerObj.name}
                  onChange={(e) => {
                    setCustomerObj({ ...customerObj, name: e.target.value });
                  }}
                  required
                />

                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-light"
                >
                  Email address
                </label>

                {/* Email input field */}
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={customerObj.email}
                  onChange={(e) => {
                    setCustomerObj({ ...customerObj, email: e.target.value });
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
                {/* Password input field */}
                <input
                  type={passwordInputType}
                  id="new-password"
                  className="form-control"
                  placeholder="Enter new password"
                  onChange={(e) => {
                    setCustomerObj({
                      ...customerObj,
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

              {!customerSignupPending ? (
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
