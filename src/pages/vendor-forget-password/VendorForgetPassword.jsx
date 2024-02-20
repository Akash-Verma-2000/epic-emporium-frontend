import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOTP,
  verifyOTP,
  resetPassword,
} from "../../redux/reducers/vendorReducer";
import Button from "../../components/button/Button";
import MessageBar from "../../components/message-bar/MessageBar";
import LoadingButton from "../../components/button/LoadingButton";
import FormTabs from "../../components/form-tabs/FormTabs";

export default function VendorForgetPassword() {
  const [showVisibility, setshowVisibility] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState(0);
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();

  function showPassword() {
    setshowVisibility(true);
    setPasswordInputType("text");
  }

  function hidePassword() {
    setshowVisibility(false);
    setPasswordInputType("password");
  }

  function resetPasswordFormSubmitHandler(e) {
    e.preventDefault();
    dispatch(resetPassword({ newPassword }));
  }

  const message = useSelector((state) => state.vendors.message);
  const sendOTPPending = useSelector((state) => state.vendors.sendOTPPending);
  const OTPVerificationPending = useSelector(
    (state) => state.vendors.OTPVerificationPending
  );

  const passwordResetPending = useSelector(
    (state) => state.vendors.passwordResetPending
  );

  return (
    <>
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
                <h3 className="text-light text-center mb-3">Reset Password</h3>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light">
                    Email address
                  </label>

                  <div className="input-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter registered email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />

                    {!sendOTPPending ? (
                      <button
                        className="btn bg-primary text-light"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                          dispatch(sendOTP({ email }));
                        }}
                      >
                        Send OTP
                      </button>
                    ) : (
                      <LoadingButton />
                    )}
                  </div>
                  <div id="emailHelp" className="form-text text-light">
                    We'll never share your email with anyone else.
                  </div>
                  <label htmlFor="otp" className="form-label text-light mt-3">
                    OTP
                  </label>

                  <div className="input-group mb-3">
                    <input
                      type="password"
                      id="otp"
                      className="form-control"
                      placeholder="Enter 6 digit OTP"
                      onChange={(e) => {
                        setOTP(e.target.value);
                      }}
                    />

                    {!OTPVerificationPending ? (
                      <button
                        className="btn bg-primary text-light"
                        type="button"
                        id="button-addon2"
                        onClick={() => {
                          dispatch(verifyOTP({ otp }));
                        }}
                      >
                        Verify OTP
                      </button>
                    ) : (
                      <LoadingButton />
                    )}
                  </div>

                  <label
                    htmlFor="new-password"
                    className="form-label text-light"
                  >
                    New Password
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type={passwordInputType}
                      id="new-password"
                      className="form-control"
                      placeholder="Enter new password"
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
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

                  {!passwordResetPending ? (
                    <Button
                      fn={resetPasswordFormSubmitHandler}
                      color={"primary"}
                      text={"Reset Password"}
                    />
                  ) : (
                    <LoadingButton />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
