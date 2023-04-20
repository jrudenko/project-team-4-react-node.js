// import React, { useState } from 'react';
// import { BtnSearch, InputSearch, Form } from './SearchMain.styled';

// function SearchMain() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = e => {
//     e.preventDefault();
//     console.log('Search term:', searchTerm);
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSearch}>
//         <InputSearch
//           type="text"
//           placeholder="Enter the text"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//         <BtnSearch bgColor="black" type="submit">
//           Search
//         </BtnSearch>
//       </Form>
//     </div>
//   );
// }

// export default SearchMain;

// import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Form,
  SearchInput,
  SearchButton,
} from '../../../components/SearchForm/SearchForm.styled';

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
