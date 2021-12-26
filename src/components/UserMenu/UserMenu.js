import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserName } from "../redux/auth/auth-selector";
import { logOut } from "../redux/auth/auth-operations";
import s from "./UserMenu.module.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <div className={s.userMenu}>
      <p className={s.userName}>Welocome, {userName}</p>
      <button
        type="button"
        className={s.btnLogOut}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
