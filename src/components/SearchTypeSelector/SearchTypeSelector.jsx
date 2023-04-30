import { Label, BoxSelector, Select } from './SearchTypeSelector.styled';

export default function SearchTypeSelector({ onHandleChange }) {
  return (
    <BoxSelector>
      <Label htmlFor="search">Search by:</Label>
      <Select
        id="search"
        name="type"
        defaultValue="ingredients"
        onChange={evt => onHandleChange(evt)}
      >
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
      </Select>
    </BoxSelector>
  );
}
