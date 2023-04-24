import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainSearch from './SearchMain.styled';
import Button from 'components/Button';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSearchPage = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const theme = useSelector(state => state.theme.darkMode);

  const handleNameChange = event => setSearch(event.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('Please, enter a valid search request!', {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: theme ? 'dark' : 'light',
      });
      setSearch('');
      return;
    }
    navigate(`/search?query=${search}`);
    setSearch('');
  };

  return (
    <MainSearch onSubmit={onSubmit}>
      <input
        type="search"
        placeholder=""
        value={search}
        onChange={handleNameChange}
      />

      <Button
        type="submit"
        look="rounded"
        width="113px"
        heigth="52px"
        widthTablet="161px"
        heigthTablet="59px"
        heigthDesktop="70px"
        widthDesktop="161px"
        fontSize="14px"
        fontSizeTablet="16px"
        fontSizeDesktop="16px"
        lineHeight="21px"
        lineHeightTablet="24px"
        lineHeightDesktop="24px"
      >
        Search
      </Button>
    </MainSearch>
  );
};

export default MainSearchPage;

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { updateSearchQuery } from 'redux/search/searchSlice';
// import { Form, SearchInput, SearchButton } from '../Search/SearchMain.styled';

// const SearchMain = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const onInputSubmit = e => {
//     e.preventDefault();
//     if (!e.target.search.value) {
//       toast.warning('Type the query for search');
//       return;
//     }
//     dispatch(updateSearchQuery(e.target.search.value));
//     navigate('/search');
//   };
//   return (
//     <Form onSubmit={onInputSubmit}>
//       <SearchInput searchQuery="" name="search" />
//       <SearchButton title="Search" type="submit">
//         Search
//       </SearchButton>
//     </Form>
//   );
// };

// export default SearchMain;

// import { useState, useEffect } from 'react';
// import { Form, SearchInput, SearchButton } from '../Search/SearchMain.styled';

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
