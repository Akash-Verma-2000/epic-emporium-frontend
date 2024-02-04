import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5  form-section">
            <form className="px-3 py-5 rounded-4 shadow">
              <h2 className="text-light mb-5">Login Form </h2>
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

             <Link to={"/register"} className="d-block mb-3 text-decoration-none">Are you not registered?</Link>

              <Button color={"primary"} text={"Login"}/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
