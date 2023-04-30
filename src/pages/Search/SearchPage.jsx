import Title from 'components/Title';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import Scroll from '../../utils/scroll';

export default function SearchPage() {
  return (
    <>
      <Title>Search</Title>
      <SearchBar />
      <SearchedRecipesList />
      <Scroll />
    </>
  );
}
