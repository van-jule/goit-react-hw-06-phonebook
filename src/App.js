import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

const App = () => (
  <div className="App">
    <h1>Phonebook</h1>
    <Form />
    <h2>Contacts</h2>
    <Filter />
    <ContactsList />
  </div>
);

export default App;
