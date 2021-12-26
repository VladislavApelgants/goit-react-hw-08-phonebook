import PropTypes from "prop-types";
import s from "./Filter.module.scss";

export default function Filter({ value, onChange }) {
  return (
    <label className={s.labelFilter}>
      Filter by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.popTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
