import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';
export const ContactList = ({ onDelete, contacts }) => {
  return (
    <Contacts>
      <ContactItem onDelete={onDelete} contacts={contacts} />
    </Contacts>
  );
};
