import Title from 'components/Title';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';

export default function SearchPage() {
  return (
    <>
      <Title>Search</Title>
      <SearchBar />
      <SearchedRecipesList />
    </>
  );
}
