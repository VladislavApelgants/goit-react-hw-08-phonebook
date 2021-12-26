import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <ul className="Auth-Nav">
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "deactiveNavLink"
          }
        >
          Register
        </NavLink>{" "}
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "deactiveNavLink"
          }
        >
          LogIn
        </NavLink>
      </li>
    </ul>
  );
}
