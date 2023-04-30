import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';
import { SearchBarWrapper } from './SearchBar.styled';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchType = searchParams.get('type') || 'ingredients';

  const [type, setType] = useState({
    type: searchType,
  });

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
      <SearchTypeSelector
        onHandleChange={handleChange}
        defaultValue={searchType}
      />
    </SearchBarWrapper>
  );
}
