import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./CustomerLoginPage.css";

export default function CustomerLoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5  form-section">
            <form action="https://epic-emporium.onrender.com/api/user/signin" method="post" className="px-3 py-5 rounded-4 shadow">
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
                />
              </div>
             
             <Link to={"/customer/register"} className="d-block mb-3 text-decoration-none">Are you not registered?</Link>

              <Button color={"primary"} text={"Login"}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
