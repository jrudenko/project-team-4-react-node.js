import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateSearchQuery } from 'redux/search/searchSlice';
import { Form, SearchInput, SearchButton } from '../Search/SearchMain.styled';

const SearchMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onInputSubmit = e => {
    e.preventDefault();
    if (!e.target.search.value) {
      toast.warning('Type the query for search');
      return;
    }
    dispatch(updateSearchQuery(e.target.search.value));
    navigate('/search');
  };
  return (
    <Form onSubmit={onInputSubmit}>
      <SearchInput searchQuery="" name="search" />
      <SearchButton title="Search" type="submit">
        Search
      </SearchButton>
    </Form>
  );
};

export default SearchMain;

// import { useState, useEffect } from 'react';

// export default function SearchMain({ onSubmit, queryParam = '' }) {
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     setQuery(queryParam);
//   }, [queryParam]);

//   const inputChange = evt => {
//     const { value } = evt.target;
//     setQuery(value);
//   };

//   const formSubmit = evt => {
//     evt.preventDefault();

//     if (query.trim() === '') {
//       return alert('Enter request to search');
//     }

//     onSubmit(query);
//   };

//   return (
//     <Form onSubmit={formSubmit}>
//       <SearchInput
//         type="text"
//         autocomplete="off"
//         value={query}
//         placeholder="Enter query"
//         onChange={inputChange}
//       />
//       {/* Придумать як переходить без нав лінка з валідацією */}
//       {/* <NavLink to="/search"> */}
//       <SearchButton type="submit">Search</SearchButton>
//       {/* </NavLink> */}
//     </Form>
//   );
// }
