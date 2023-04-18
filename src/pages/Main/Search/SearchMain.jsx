import React, { useState } from 'react';
import { BtnSearch, InputSearch } from './SearchMain.styled';

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <InputSearch
          type="text"
          placeholder="Enter the text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <BtnSearch bgColor="black" type="submit">
          Search
        </BtnSearch>
      </form>
    </div>
  );
}

export default SearchMain;
