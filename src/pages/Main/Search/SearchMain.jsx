import React, { useState } from 'react';
import { BtnSearch, InputSearch, Form } from './SearchMain.styled';

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <Form onSubmit={handleSearch}>
        <InputSearch
          type="text"
          placeholder="Enter the text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <BtnSearch bgColor="black" type="submit">
          Search
        </BtnSearch>
      </Form>
    </div>
  );
}

export default SearchMain;
