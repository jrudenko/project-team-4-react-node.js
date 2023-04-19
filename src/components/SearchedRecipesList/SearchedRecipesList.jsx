import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import RecipesList from 'components/RecipesList/RecipesList';
import PageEmpty from 'components/PageEmpty';
import { NoSearchText } from './SearchedRecipesList.styled';

export default function SearchedRecipesList() {
  const [recipes, setRecipes] = useState(null);
  const [searchParams] = useSearchParams();

  // const dispatch = useDispatch();

  const searchQuery = searchParams.get('query') ?? '';
  const searchType = searchParams.get('type') ?? '';

  useEffect(() => {
    if (searchQuery === '' || searchType === '') {
      return;
    }
    // Fetch data from server
    setRecipes([]);
  }, [searchQuery, searchType]);

  return recipes ? (
    (recipes.length === 0 && (
      <PageEmpty text="Try looking for something else..." />
    )) ||
      (recipes.length > 0 && <RecipesList recipes={recipes} />)
  ) : (
    <NoSearchText>Enter your search query</NoSearchText>
  );
}
