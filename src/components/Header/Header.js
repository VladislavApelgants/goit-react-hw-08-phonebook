import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import { getIsLoggedIn } from "../redux/auth/auth-selector";
import s from "./Header.module.scss";

import UserMenu from "../UserMenu/UserMenu";

export default function Header() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <nav className={s.headerNavigation}>
          <ul className={s.navList}>
            <li className={s.headerList__item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "deactiveNavLink"
                }
              >
                Home
              </NavLink>
            </li>
            <li className={s.headerList__item}>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "deactiveNavLink"
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
