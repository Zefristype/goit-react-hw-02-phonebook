import { Input,Label } from "./Filter.styled";
export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onFilter} />
    </Label>
  );
};
