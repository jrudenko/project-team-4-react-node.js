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
import { Puff } from 'react-loader-spinner';

export default function SearchedRecipesList() {
  const [searchParams] = useSearchParams();

  const recipes = useSelector(selectSearchResult);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const query = searchParams.get('query') ?? '';
  const searchType = searchParams.get('type') ?? '';

  useEffect(() => {
    if (query === '' || searchType === '') {
      return;
    }
    dispatch(getSearchByTitle({ query }));
  }, [dispatch, query, searchType]);

  return (
    <>
      {isLoading && (
        <Puff wrapperStyle={{ display: 'inline-block', textAlign: 'center' }} />
      )}
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

  //     recipes ? (
  //     (recipes.length === 0 && (
  //       <PageEmpty text="Try looking for something else..." />
  //     )) ||
  //       (recipes.length > 0 && <RecipesList recipes={recipes} />)
  //   ) : (
  //     <NoSearchText>Enter your search query</NoSearchText>
  //   );
}
