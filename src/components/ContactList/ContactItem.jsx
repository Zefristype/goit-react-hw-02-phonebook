import { Item,Button } from './ContactList.styled';
export const ContactItem = ({ onDelete, contacts }) => {
  return (
    <>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </>
  );
};
