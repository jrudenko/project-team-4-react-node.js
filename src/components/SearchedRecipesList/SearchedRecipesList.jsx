import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import RecipesList from 'components/RecipesList/RecipesList';
import EmptyPage from 'components/EmptyPage';
import {
  selectSearchResult,
  selectIsLoading,
  selectError,
  selectTotalPage,
} from 'redux/search/searchSelectors';
import {
  getSearchByTitle,
  getSearchByIngredients,
} from 'redux/search/searchOperations';
import { NoSearchText } from './SearchedRecipesList.styled';
import { Loader } from 'components/Loader/Loader';
import { Paginator } from 'components/Paginator/Paginator';

export default function SearchedRecipesList() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const perPage = 6;

  const recipes = useSelector(selectSearchResult);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPage = useSelector(selectTotalPage);

  const dispatch = useDispatch();

  const query = searchParams.get('query') ?? '';
  const type = searchParams.get('type') ?? '';

  useEffect(() => {
    if (query === '' || type === '') {
      return;
    }

    if (type === 'title') {
      dispatch(getSearchByTitle({ query, page, perPage }));
    }

    if (type === 'ingredients') {
      dispatch(getSearchByIngredients({ query, page, perPage }));
    }
  }, [dispatch, page, perPage, query, type]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {!isLoading && recipes
        ? (recipes.length === 0 && (
            <EmptyPage text="Try looking for something else..." />
          )) ||
          (recipes.length > 0 && <RecipesList recipes={recipes} />)
        : !isLoading && <NoSearchText>Enter your search query</NoSearchText>}
      {error && toast.warn('Something gone wrong, please try again!')}
      {recipes && !isLoading && recipes.length > 0 && (
        <Paginator
          perPage={perPage}
          totalData={totalPage}
          setPage={setPage}
          page={page}
        />
      )}
    </>
  );
}
