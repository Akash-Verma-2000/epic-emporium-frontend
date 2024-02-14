import { Outlet, NavLink } from "react-router-dom";

import LogoImage from "../../images/LogoImage.jpg";
import Button from "../../components/button/Button";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light border-bottom border-primary border-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img id="logo-img" src={LogoImage} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/"
                >
                  <i className="bi bi-house-door"></i> Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/customer/login"
                >
                  <Button text={"I'm a customer"} color={"primary"} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/customer/register"
                >
                  <Button text={"Logout"} color={"danger"} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
