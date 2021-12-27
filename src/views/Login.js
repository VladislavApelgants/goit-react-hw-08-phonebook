import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../components/redux/auth/auth-operations";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  function submitLoginForm(e) {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPass("");
  }

  function changeLoginForm(params) {
    const { name, value } = params.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPass(value);
        break;
      default:
        break;
    }
  }

  return (
    <div className="form-wrap">
      <form onSubmit={submitLoginForm} className="form">
        <label className="form__label">
          <span className="label-name">Email</span>
          <input
            type="text"
            name="email"
            className="form__input"
            pattern="[a-zA-Zа-яА-Я]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$+\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={email}
            onChange={changeLoginForm}
          />
        </label>
        <label className="form__label">
          <span className="label-name">Password</span>
          <input
            type="text"
            name="password"
            className="form__input"
            pattern="^[a-zA-Zа-яА-Я]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$+\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Email должен состоять цифр, букв и может тире"
            required
            value={password}
            onChange={changeLoginForm}
          />
        </label>
        <div class="form__wrap-btn">
          <button type="submit" className="submit-form">
            Login
          </button>
          <div class="circle angled"></div>
        </div>
      </form>
    </div>
  );
}
