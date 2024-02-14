import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./CustomerLoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { customerSignin } from "../../redux/reducers/customerReducer";
import LoadingButton from "../../components/button/LoadingButton";
import MessageBar from "../../components/message-bar/MessageBar";

export default function CustomerLoginPage() {
  const [customerObj, setCustomerObj] = useState({ email: "", password: "" });

  function signinFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(customerSignin(customerObj));
  }

  const dispatch = useDispatch();

  const message = useSelector((state) => state.customers.message);
  const customerSigninPending = useSelector(
    (state) => state.customers.customerSigninPending
  );

  return (
    <div className="login-page">
      <div className="container">
        {message ? <MessageBar text={message} /> : null}

        <div className="row">
          <div className="col-md-5  form-section">
            <form
              action="https://epic-emporium.onrender.com/api/user/signin"
              method="post"
              className="px-3 py-5 rounded-4 shadow"
            >
              <h2 className="text-light mb-5">Log-in Form </h2>
              <div className="mb-3">
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
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={customerObj.password}
                  onChange={(e) => {
                    setCustomerObj({
                      ...customerObj,
                      password: e.target.value,
                    });
                  }}
                />
              </div>

              <Link
                to={"/customer/register"}
                className="d-block mb-3 text-decoration-none"
              >
                Are you not registered?
              </Link>

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
