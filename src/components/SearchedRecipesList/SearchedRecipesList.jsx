import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import RecipesList from 'components/RecipesList/RecipesList';
import PageEmpty from 'components/PageEmpty';
import { getRecipesBySearchQuery } from 'redux/outerRecipes/outerRecipesSelectors';
import { getRecipesByQuery } from 'redux/outerRecipes/outerRecipesOperations';
import { NoSearchText } from './SearchedRecipesList.styled';

export default function SearchedRecipesList() {
  // const [recipes, setRecipes] = useState(null);
  const [searchParams] = useSearchParams();

  const { recipes } = useSelector(getRecipesBySearchQuery);
  const dispatch = useDispatch();

  const query = searchParams.get('query') ?? '';
  const searchType = searchParams.get('type') ?? '';

  useEffect(() => {
    if (query === '' || searchType === '') {
      return;
    }
    dispatch(getRecipesByQuery({ query }));
  }, [dispatch, query, searchType]);

  return recipes ? (
    (recipes.length === 0 && (
      <PageEmpty text="Try looking for something else..." />
    )) ||
      (recipes.length > 0 && <RecipesList recipes={recipes} />)
  ) : (
    <NoSearchText>Enter your search query</NoSearchText>
  );
}
