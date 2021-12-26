import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../components/redux/auth/auth-operations";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  function changeRegisterForm(params) {
    const { name, value } = params.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
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

  function registerDataSubmit(e) {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPass("");
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerDataSubmit} autoComplete="off">
        <label>
          <span>name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={changeRegisterForm}
          />
        </label>
        <label>
          <span>email</span>
          <input
            type="text"
            name="email"
            pattern="^[a-zA-Zа-яА-Я]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$+\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Email может состоять только из букв, тире . Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={email}
            onChange={changeRegisterForm}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="text"
            name="password"
            pattern="^[a-zA-Zа-яА-Я]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$+\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Пароль телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={password}
            onChange={changeRegisterForm}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
