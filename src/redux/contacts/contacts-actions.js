import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/Add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction("contacts/Delete");
// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const changeFilter = createAction("contacts/Filter");

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
