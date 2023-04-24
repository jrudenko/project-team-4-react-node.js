import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import { SearchBarWrapper } from './SearchBar.styled';

export default function SearchBar() {
  const [type, setType] = useState({
    type: 'title',
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams =
      normalizedQuery !== '' ? { query: normalizedQuery, ...type } : {};
    setSearchParams(nextParams);
  };

  const handleChange = evt => {
    let { name, value } = evt.target;
    setType({
      [name]: value,
    });
  };
  return (
    <SearchBarWrapper>
      <SearchForm onSubmit={updateQuery} queryParam={searchQuery} />
      <SearchTypeSelector onHandleChange={handleChange} />
    </SearchBarWrapper>
  );
}
