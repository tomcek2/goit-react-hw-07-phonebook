import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../redux/operations';
import { filteredContacts } from '../redux/selectors';

import { ContactUlList, ContactButton } from './Styles.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const contacts = useSelector(filteredContacts);

  return (
    <div>
      <h2>Contacts</h2>
      <ContactUlList>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <ContactButton onClick={() => handleDelete(contact.id)}>
              Delete
            </ContactButton>
          </li>
        ))}
      </ContactUlList>
    </div>
  );
};
