import { useState, useEffect } from 'react';
import { Form, SearchInput, SearchButton } from '../Search/SearchMain.styled';

export default function SearchMain({ onSubmit, queryParam = '' }) {
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
      {/* Придумать як переходить без нав лінка з валідацією */}
      {/* <NavLink to="/search"> */}
      <SearchButton type="submit">Search</SearchButton>
      {/* </NavLink> */}
    </Form>
  );
}
