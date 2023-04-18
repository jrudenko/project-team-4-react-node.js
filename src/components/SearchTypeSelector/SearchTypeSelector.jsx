export default function SearchTypeSelector({ onHandleChange }) {
  return (
    <label>
      Search by:
      <select
        name="type"
        defaultValue="title"
        onChange={evt => onHandleChange(evt)}
      >
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
      </select>
    </label>
  );
}
