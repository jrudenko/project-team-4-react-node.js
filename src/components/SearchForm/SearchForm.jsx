import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      return toast.info('Enter request to search');
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
      <ToastContainer position="top-left" theme="light" autoClose={3000} />
    </Form>
  );
}
