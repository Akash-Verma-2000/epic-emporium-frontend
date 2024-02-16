import "./FormTabs.css";
import { NavLink } from "react-router-dom";

export default function FormTabs() {
  return (
    <>
      <ul className="nav nav-tabs border-primary mb-5">
        <li className="nav-item">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#0d6efd",
                    color: "white",
                    borderColor: "#0d6efd",
                  }
                : undefined
            }
            className="nav-link "
            aria-current="page"
            to="/customer/login"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#0d6efd",
                    color: "white",
                    borderColor: "#0d6efd",
                  }
                : undefined
            }
            className="nav-link"
            to="/customer/register"
          >
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "#0d6efd",
                    color: "white",
                    borderColor: "#0d6efd",
                  }
                : undefined
            }
            className="nav-link"
            to="/customer/forget-password"
          >
            Reset Password
          </NavLink>
        </li>
      </ul>
    </>
  );
}
