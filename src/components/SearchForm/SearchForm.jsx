import { useState, useEffect } from 'react';
import ReplaceableButton from 'components/ButtonMain/ButtonMain';
import { Form, Input } from './SearchForm.styled';
import { theme } from 'utils/theme';

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
      <Input
        type="text"
        autocomplete="off"
        value={query}
        placeholder="Enter query"
        onChange={inputChange}
      />
      <ReplaceableButton
        type="submit"
        label="Search"
        color={theme.colors.colorAccent}
      />
    </Form>
  );
}
