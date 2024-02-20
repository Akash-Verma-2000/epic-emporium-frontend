import "./FormTabs.css";
import { NavLink } from "react-router-dom";

export default function FormTabs({link1, link2, link3}) {
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
            to={link1}
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
            to={link2}
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
            to={link3}
          >
            Reset Password
          </NavLink>
        </li>
      </ul>
    </>
  );
}
