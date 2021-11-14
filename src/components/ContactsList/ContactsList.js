import React from "react";
import styles from "./ContactsList.module.css";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, onDeleteContact }) =>
  contacts.length === 0 ? (
    <div> No contacts </div>
  ) : (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
