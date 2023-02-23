import React from 'react';
import styles from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/contacts-slice';

const ContactsList = () => {
  const contactsRdx = useSelector(state => state.contacts);
  const filterRdx = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const searchContact = () => {
    if (!filterRdx) {
      return contactsRdx;
    }
    const normalize = filterRdx.toLowerCase();
    return contactsRdx.filter(({ name }) =>
      name.toLowerCase().includes(normalize)
    );
  };

  const filteredList = searchContact();

  return (
    <ul className={styles.contactsList}>
      {filteredList.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contact}>
            {name}: {number}
          </p>
          <button
            className={styles.btnList}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
