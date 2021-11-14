import React, { useState, memo } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";
import styles from "./Form.module.css";

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ name: "", number: "" });

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    reset();
  };

  const reset = () => {
    setState({ name: "", number: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameInputId}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
        />
      </label>

      <label className={styles.label} htmlFor={telInputId}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={telInputId}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (info) => dispatch(contactsActions.addContact(info)),
});

export default connect(null, mapDispatchToProps)(memo(Form));
