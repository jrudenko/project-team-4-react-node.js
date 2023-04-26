import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RecipePageHero from 'components/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import Container from 'components/Container';
import {
  selectRecipeById,
  // selectRecipeIsLoading,
  // selectRecipeError,
  selectOwnRecipeById,
} from 'redux/recipe/recipeSelectors';
import { getRecipeById, getOwnRecipeById } from 'redux/recipe/recipeOperation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const recipe = useSelector(selectRecipeById);
  const ownRecipe = useSelector(selectOwnRecipeById);

  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isOwnRecipe, setOwnRecipe] = useState(null);

  console.log(`currentRecipe`, currentRecipe);

  useEffect(() => {
    if (location?.state?.from.pathname === '/my') {
      setOwnRecipe(true);
      dispatch(getOwnRecipeById(recipeId));
    } else {
      dispatch(getRecipeById(recipeId));
      setOwnRecipe(false);
    }
  }, [recipeId, dispatch, location?.state?.from.pathname]);

  useEffect(() => {
    setCurrentRecipe(recipe ?? ownRecipe);
  }, [recipe, ownRecipe]);

  return (
    <Container>
      {currentRecipe !== null && (
        <>
          <RecipePageHero recipe={currentRecipe} isOwnRecipe={isOwnRecipe} />
          <RecipeInngredientsList recipe={currentRecipe} />
          <RecipePreparation recipe={currentRecipe} />
        </>
      )}
    </Container>
  );
};

export default RecipePage;
