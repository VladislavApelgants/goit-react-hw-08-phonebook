import React, { useEffect } from "react";
import Form from "../components/Form";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { filterAction } from "../components/redux/contacts/contacts-actions";
import {
  addContactsItem,
  fetchContacts,
} from "../components/redux/contacts/contacts-operations";

import {
  getFilter,
  getItems,
  getLoad,
} from "../components/redux/contacts/contacts-selectors";

export default function Contacts() {
  const filter = useSelector((state) => getFilter(state));
  const items = useSelector((state) => getItems(state));
  const load = useSelector((state) => getLoad(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formSubmit(name, phone) {
    if (items.find((contact) => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }

    return dispatch(addContactsItem({ name, phone }));
  }

  function getFiltered() {
    const lowerCase = filter && filter.toLowerCase();
    return items.filter(
      (contact) =>
        contact.name && contact.name.toLowerCase().includes(lowerCase)
    );
  }

  function filt(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "filter":
        dispatch(filterAction(value));
        break;
      default:
        return;
    }
  }

  return (
    <>
      <section className="phonebook">
        <h1 className="title">Phonebook</h1>

        <Form onSubmit={formSubmit} />
        <div className="contacts">
          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={filt} />
          <div className="containerOverflow">
            {load && <p>Load...</p>}
            {items.length !== 0 ? (
              <ContactList data={getFiltered()} />
            ) : (
              <p>There is nothing here yet</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
