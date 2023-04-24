import {
  Wrapper,
  HeroTitle,
  HeroText,
  WrapperTime,
  StyledClock,
} from './RecipePageHero.styled';
import ButtonSkew from 'components/ButtonSkew';
import { ToastContainer, toast } from 'react-toastify';
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

import {
  selectFavoriteIsLoading,
} from 'redux/recipe/recipeSelectors';

const RecipePageHero = ({ recipe, isOwnRecipe }) => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState({});
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const loader = useSelector(selectFavoriteIsLoading)

  const [isFav, setIsFav] = useState(false);
  console.log(`allRecipes`, allRecipes);
  console.log(`isFav`, isFav);

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
  }, [isFav]);

  function addFavRecipe() {
    dispatch(addRecipeToFavorite(recipe._id));
    setIsFav(true);
    toast.success('Recipe added to favorite');
  }

  function removeFavRecipe() {
    dispatch(removeRecipeFromFavorite(recipe._id));
    setIsFav(false);
    toast.success('Recipe removed from favorite');
  }

  return (
    
      <Wrapper>
        {recipe ? 
        <>
        {!loading ? 
        <>
        <HeroTitle>{recipe.title}</HeroTitle>
        <HeroText>{recipe.description.slice(0, 200)}...</HeroText>
        {!isOwnRecipe &&
          (!isFav ? (
            <ButtonSkew
              type="button"
              text= {loader ? "loader...": "Add to favorite recipes"}
              fn={addFavRecipe}
            />
          ) : (
            <ButtonSkew
              type="button"
              text= {loader ? "loader...": "Remove from favorite recipes"}
              fn={removeFavRecipe}
            />
          ))}
        {recipe.time && (
          <WrapperTime>
            <StyledClock />
            <span>{recipe.time + ` min`}</span>
          </WrapperTime>
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> </> : <HeroTitle>Loading...</HeroTitle>}
          
          
        </>
        : <HeroTitle>Recipe not found</HeroTitle>}
        
      </Wrapper>
    
  );
};

RecipePageHero.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default RecipePageHero;
