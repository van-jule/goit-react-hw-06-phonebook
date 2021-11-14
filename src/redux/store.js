import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contacts-reducer";
import formReducer from "./form/form-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  form: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
