import { useState, useEffect } from 'react';
import { Form, SearchInput, SearchButton } from './SearchForm.styled';

export default function SearchForm({ onSubmit, queryParam = '' }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const inputChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };

  const formSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      return alert('Enter request to search');
    }

    onSubmit(query);
  };

  return (
    <Form onSubmit={formSubmit}>
      <SearchInput
        type="text"
        autocomplete="off"
        value={query}
        placeholder="Enter query"
        onChange={inputChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
}
