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
    navigate(`/search?query=${search}&type=ingredients`);
    setSearch('');
  };

  return (
    <MainSearch onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter query"
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
