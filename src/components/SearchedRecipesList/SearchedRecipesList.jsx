import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import RecipesList from 'components/RecipesList/RecipesList';
import PageEmpty from 'components/PageEmpty';
import {
  selectSearchResult,
  selectIsLoading,
} from 'redux/search/searchSelectors';
import { getSearchByTitle } from 'redux/search/searchOperations';
import { NoSearchText } from './SearchedRecipesList.styled';
import { Loader } from 'components/Loader/Loader';

export default function SearchedRecipesList() {
  const [searchParams] = useSearchParams();

  const recipes = useSelector(selectSearchResult);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? '';

  useEffect(() => {
    if (query === '' || type === '') {
      return;
    }
    dispatch(getSearchByTitle({ query, type }));
  }, [dispatch, query, type]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && recipes ? (
        (recipes.length === 0 && (
          <PageEmpty text="Try looking for something else..." />
        )) ||
        (recipes.length > 0 && <RecipesList recipes={recipes} />)
      ) : (
        <NoSearchText>Enter your search query</NoSearchText>
      )}
    </>
  );
}
