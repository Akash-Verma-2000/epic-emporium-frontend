import { useState } from "react";
import "./CustomerRegisterPage.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { customerSignup } from "../../redux/reducers/customerReducer";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "../../components/button/LoadingButton";
import MessageBar from "../../components/message-bar/MessageBar";
import FormTabs from "../../components/form-tabs/FormTabs";

export default function CustomerRegisterPage() {
  const [customerObj, setCustomerObj] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function signupFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(customerSignup(customerObj));
  }

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
            <form className="px-3 py-5 rounded-4 shadow">
              <FormTabs />
              <h3 className="text-light text-center mb-3">Customer Register</h3>
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
                  value={customerObj.name}
                  onChange={(e) => {
                    setCustomerObj({ ...customerObj, name: e.target.value });
                  }}
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
                  password=" password"
                  type="password"
                  className="form-control mb-3"
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

            

              {!customerSignupPending ? (
                <Button
                  fn={signupFormSubmitHandler}
                  color={"primary"}
                  text={"Register"}
                />
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
