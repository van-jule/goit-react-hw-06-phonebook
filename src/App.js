import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import shortid from "shortid";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);

  const [filter, setFilter] = useState("");

  // const addNewContact = useCallback(
  //   ({ name, number }) => {
  //     const newContact = {
  //       id: shortid.generate(),
  //       name,
  //       number,
  //     };
  //     console.log(name, number);

  //     const alreadyInContacts = contacts.find(
  //       (contact) =>
  //         newContact.name.toLowerCase() === contact.name.toLowerCase()
  //     );

  //     if (alreadyInContacts) {
  //       alert(`${newContact.name} is already in contacts`);
  //     } else {
  //       setContacts([...contacts, newContact]);
  //       localStorage.setItem(
  //         "contacts",
  //         JSON.stringify([...contacts, newContact])
  //       );
  //     }
  //   },
  //   [contacts]
  // );

  // const deleteContact = (contactId) => {
  //   const updatedContact = contacts.filter(
  //     (contact) => contact.id !== contactId
  //   );
  //   setContacts(updatedContact);
  //   localStorage.setItem("contacts", JSON.stringify(updatedContact));
  // };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
