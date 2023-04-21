import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFavoriteRecipes,
  getIsOwnRecipesFetching,
  getTotalFavoriteRecipes,
} from 'redux/ownRecipes/ownRecipesSelectors';
import { getFavorite } from 'redux/ownRecipes/ownRecipesOperations';

import Container from 'components/Container';
import Title from 'components/Title';
import PageEmpty from 'components/PageEmpty';
import FavoriteRecipeBox from 'components/FavoriteRecipeBox';

import img from '../../images/default.jpg';

import { ContentWrapper, Wrapper } from './FavoritePage.styled';
import { scroll } from 'utils/scroll';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoriteRecipes);
  const total = useSelector(getTotalFavoriteRecipes);
  const isFetching = useSelector(getIsOwnRecipesFetching);
  const perPage = 4;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getFavorite({ page: page, per_page: perPage }));
  }, [dispatch, page]);

  useEffect(() => {
    if (favorites.length < perPage)
      dispatch(getFavorite({ page: page, per_page: perPage }));
    if (favorites.length <= 0)
      dispatch(getFavorite({ page: page - 1, per_page: perPage }));
  }, [dispatch, favorites.length, page]);

  const handleChange = (event, value) => {
    setPage(value);
    scroll();
  };
    // return (
    //     <Wrapper>
    //         <Container>
    //             <Title>Favorites</Title>
    //         </Container>
    //         <PageEmpty text="You currently don't have any favorite recipes added. Let's add some!" />
    //         <ContentWrapper></ContentWrapper>
    //     </Wrapper>);
    return (
    <Wrapper>
      <Container>
        <Title>Favorites</Title>
        {isFetching ? (
          <div>Loader</div>
        ) : (
          <>
            {favorites && favorites.length > 0 ? (
              <ContentWrapper>
                {favorites.map(item => {
                  return (
                    <li key={item.recipe}>
                      <FavoriteRecipeBox
                        location="favorite"
                        id={item._id}
                        img={item.thumb ?? img}
                        title={item.title ?? 'No name'}
                        text={
                          <span>
                            {item.instructions?? 'No description'}
                          </span>
                        }
                        time={item.time ? `${item.time} min` : ''}
                      />
                    </li>
                  );
                })}
              </ContentWrapper>
            ) : (
              <PageEmpty text="You currently don't have any favorite recipes added. Let's add some!" />
            )}
            {favorites && favorites.length > 0 && (
              <div handleChange={handleChange} count={Math.ceil(total / perPage)}
                page={page}>Pagination</div>
            )}
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default FavoritePage;
