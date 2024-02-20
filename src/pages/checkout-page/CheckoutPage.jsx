import { useState } from "react";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const [checkout, setCheckout] = useState(false);
  const [checkoutObj, setCheckoutObj] = useState({
    fullname: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pin: "",
    add: "",
  });

  function placeOrder() {
    setCheckout((prev) => !prev);
    setCheckoutObj({
      fullname: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      pin: "",
      add: "",
    });
  }
  return (
    <>
      <div className="login-page">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8  form-section">
              {!checkout ? (
                <form className="px-3 py-5 rounded-4 shadow" onSubmit={placeOrder}>
                  <h3 className="text-light text-center mb-3">Checkout Form</h3>
                  <div className="my-3">
                    <label
                      htmlFor="full-name"
                      className="form-label text-light"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="full-name"
                      value={checkoutObj.fullname}
                      onChange={(e) => {
                        setCheckoutObj({
                          ...checkoutObj,
                          fullname: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="my-3 me-5">
                      <label htmlFor="email" className="form-label text-light">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={checkoutObj.email}
                        onChange={(e) => {
                          setCheckoutObj({
                            ...checkoutObj,
                            email: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="phone" className="form-label text-light">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={checkoutObj.phone}
                        onChange={(e) => {
                          setCheckoutObj({
                            ...checkoutObj,
                            phone: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="my-3">
                      <label htmlFor="state" className="form-label text-light">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        value={checkoutObj.state}
                        onChange={(e) => {
                          setCheckoutObj({
                            ...checkoutObj,
                            state: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                    <div className="my-3 mx-2">
                      <label htmlFor="city" className="form-label text-light">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        value={checkoutObj.city}
                        onChange={(e) => {
                          setCheckoutObj({
                            ...checkoutObj,
                            city: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="pin" className="form-label text-light">
                        Pin
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="pin"
                        value={checkoutObj.pin}
                        onChange={(e) => {
                          setCheckoutObj({
                            ...checkoutObj,
                            pin: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    <label htmlFor="add" className="form-label text-light">
                      Address
                    </label>
                    <textarea
                      id="add"
                      className="form-control mb-3"
                      value={checkoutObj.add}
                      onChange={(e) => {
                        setCheckoutObj({
                          ...checkoutObj,
                          add: e.target.value,
                        });
                      }}
                      required
                    ></textarea>
                  </div>
                  <Button
                  
                    color={"primary"}
                    text={"Place Order"}
                  />
                </form>
              ) : (
                <div className="d-flex flex-column align-items-center">
                  <h1 className="text-light text-center my-5">
                    <i class="bi bi-check2-circle"></i> Order Placed
                  </h1>
                  <p className="text-primary text-center">
                    Thank you for choosing us. The delivery person will contact
                    you soon.
                  </p>
                  <Link to={"/shop"}>
                    <Button text={"Continue Shoping"} color={"primary"} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
