import s from "./ContactList.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../redux/contacts/contacts-operations";

function ContactList({ data }) {
  const dispatch = useDispatch();

  return (
    <ul className={s.contact__list}>
      {data.map((e) => (
        <li key={e.id} className={s.contact__item}>
          <span className={s.contact__name}>{e.name}:</span>
          <span className={s.contact__number}>{e.phone}</span>
          <button
            type="button"
            className={s.contact__button}
            onClick={() => dispatch(deleteContacts(e.id))}
          >
            <AiOutlineCloseCircle className={s.iconClose} width="5" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
};
