import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { useState } from "react";
import MessageBar from "../../components/message-bar/MessageBar";
import { editProduct } from "../../redux/reducers/vendorDashboardReducer";
import LoadingButton from "../../components/button/LoadingButton";
import { useNavigate, useParams } from "react-router-dom";

export default function EditProductPage() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productObj, setProductObj] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    ID: _id,
  });

  const message = useSelector((state) => state.vendorDashboard.message);
  const editProductPending = useSelector(
    (state) => state.vendorDashboard.editProductPending
  );

  function editProductSubmitHandler(e) {
    e.preventDefault();
    dispatch(editProduct(productObj));
    setProductObj({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
    navigate("/vendor/dashboard");
  }

  return (
    <>
      <div className="login-page">
        <div className="container">
          {message ? <MessageBar text={message} /> : null}
          <div className="row ">
            <div className="col-md-5 form-section">
              <form
                className="px-3 py-5 rounded-4 shadow"
                encType="multipart/form-data"
                onSubmit={editProductSubmitHandler}
              >
                <h3 className="text-light text-center mb-3">Edit Product</h3>

                <div className="my-3">
                  <label htmlFor="title" className="form-label text-light">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={productObj.title}
                    onChange={(e) => {
                      setProductObj({ ...productObj, title: e.target.value });
                    }}
                    required
                  />
                </div>

                <label htmlFor="price" className="form-label text-light">
                  Price
                </label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={productObj.price}
                    onChange={(e) => {
                      setProductObj({ ...productObj, price: e.target.value });
                    }}
                    required
                  />
                  <button
                    className="btn bg-primary text-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="category"
                        id="flexRadioDefault1"
                        value={productObj.category}
                        onChange={() =>
                          setProductObj({ ...productObj, category: "men" })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Men
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="category"
                        id="flexRadioDefault1"
                        value={productObj.category}
                        onChange={() =>
                          setProductObj({ ...productObj, category: "woman" })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Women
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="category"
                        id="flexRadioDefault1"
                        value={productObj.category}
                        onChange={() =>
                          setProductObj({ ...productObj, category: "kids" })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Kids
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="category"
                        id="flexRadioDefault1"
                        value={productObj.category}
                        onChange={() =>
                          setProductObj({ ...productObj, category: "jewelery" })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Jewelery
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="category"
                        id="flexRadioDefault1"
                        value={productObj.category}
                        onChange={() =>
                          setProductObj({
                            ...productObj,
                            category: "electronics",
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Electronics
                      </label>
                    </li>
                    <li>
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="category"
                        id="flexRadioDefault1"
                        value={productObj.category}
                        onChange={() =>
                          setProductObj({
                            ...productObj,
                            category: "accessories",
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Accessories
                      </label>
                    </li>
                  </ul>
                </div>

                <label htmlFor="img" className="form-label text-light">
                  Product Image
                </label>
                <div className="input-group mb-3 ">
                  <input
                    type="file"
                    className="form-control"
                    id="img"
                    onChange={(e) => {
                      setProductObj({
                        ...productObj,
                        image: e.target.files[0],
                      });
                    }}
                    required
                  />
                </div>
                <label htmlFor="desc" className="form-label text-light">
                  Description
                </label>
                <textarea
                  id="desc"
                  className="form-control mb-3"
                  value={productObj.description}
                  onChange={(e) => {
                    setProductObj({
                      ...productObj,
                      description: e.target.value,
                    });
                  }}
                  required
                ></textarea>

                {!editProductPending ? (
                  <Button text={"update Product"} color={"primary"} />
                ) : (
                  <LoadingButton />
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
