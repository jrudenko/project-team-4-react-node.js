import { Label, BoxSelector, Select } from './SearchTypeSelector.styled';

export default function SearchTypeSelector({ onHandleChange, defaultValue }) {
  return (
    <BoxSelector>
      <Label htmlFor="search">Search by:</Label>
      <Select
        id="search"
        name="type"
        defaultValue={defaultValue}
        onChange={evt => onHandleChange(evt)}
      >
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
      </Select>
    </BoxSelector>
  );
}
