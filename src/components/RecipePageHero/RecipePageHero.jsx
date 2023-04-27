import {
  Wrapper,
  HeroTitle,
  HeroText,
  WrapperTime,
  StyledClock,
} from './RecipePageHero.styled';
import ButtonSkew from 'components/ButtonSkew';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteRecipes } from '../../service/API/index';
import {
  addRecipeToFavorite,
  removeRecipeFromFavorite,
} from 'redux/recipe/recipeOperation';

import { selectFavoriteIsLoading } from 'redux/recipe/recipeSelectors';

const RecipePageHero = ({ recipe = null, isOwnRecipe }) => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState({});
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const loader = useSelector(selectFavoriteIsLoading);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (allRecipes.favoriteRecipes?.length > 0) {
      const isFavorite = allRecipes.favoriteRecipes.some(
        item => item._id === recipeId
      );

      setIsFav(isFavorite);
    }
  }, [allRecipes, recipeId]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        setLoading(true);
        const data = await getFavoriteRecipes();
        setAllRecipes(data);
      } catch (error) {
        toast.error('Something went wrong by getting recipes');
      } finally {
        setLoading(false);
      }
    };

    getFavorites();
  }, []);

  const addFavRecipe = async () => {
    try {
      await dispatch(addRecipeToFavorite(recipe._id)).unwrap();
      setIsFav(true);
      toast.success('Recipe added to favorite');
    } catch (err) {
      toast.error('Something went wrong by adding recipe');
    }
  };

  const removeFavRecipe = async () => {
    try {
      await dispatch(removeRecipeFromFavorite(recipe._id)).unwrap();
      setIsFav(false);
      toast.success('Recipe remove from favorite');
    } catch (err) {
      toast.error('Something went wrong by removing recipe');
    }
  };

  return (
    <Wrapper>
      {!loading ? (
        <>
          <HeroTitle>{recipe.title}</HeroTitle>
          <HeroText>{recipe.description.slice(0, 200)}...</HeroText>
          {!isOwnRecipe &&
            (!isFav ? (
              <ButtonSkew
                type="button"
                text={loader ? 'loader...' : 'Add to favorite recipes'}
                fn={addFavRecipe}
              />
            ) : (
              <ButtonSkew
                type="button"
                text={loader ? 'loader...' : 'Remove from favorite recipes'}
                fn={removeFavRecipe}
              />
            ))}
          {recipe.time && (
            <WrapperTime>
              <StyledClock />
              <span>{recipe.time + ` min`}</span>
            </WrapperTime>
          )}
        </>
      ) : (
        <Loader pageHeight="100vh" />
      )}
    </Wrapper>
  );
};

RecipePageHero.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.number,
  }).isRequired,
};

export default RecipePageHero;
