import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RecipePageHero from 'components/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import {
  selectRecipeById,
  selectOwnRecipeById,
  selectRecipeIsLoading,
  selectOwnRecipeIsLoading,
} from 'redux/recipe/recipeSelectors';
import { getRecipeById, getOwnRecipeById } from 'redux/recipe/recipeOperation';
import { getIngredientsList } from '../../service/API/serviseApi';
import { Loader } from 'components/Loader/Loader';
import EmptyPage from 'components/EmptyPage';
import Scroll from 'utils/scroll';

const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const recipe = useSelector(selectRecipeById);
  const ownRecipe = useSelector(selectOwnRecipeById);
  const recipeLoading = useSelector(selectRecipeIsLoading);
  const ownRecipeLoading = useSelector(selectOwnRecipeIsLoading);
  const isLoading = recipeLoading || ownRecipeLoading;

  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [listIngredients, setListIngredients] = useState(null);
  const [isOwnRecipe, setOwnRecipe] = useState(null);


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
    if(location?.state?.from.pathname === '/my') {
      setCurrentRecipe(ownRecipe);
    } else if (recipe) {
      setCurrentRecipe(recipe[0]);
    }
    
  }, [recipe, ownRecipe, location?.state?.from.pathname]);

  useEffect(() => {
    if (currentRecipe !== null) {
      const { ingredients } = currentRecipe;
      setCurrentIngredients(ingredients);
    }
  }, [currentRecipe]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const IngredientsList = await getIngredientsList();
        setListIngredients(IngredientsList.data.searchResult);
      } catch (error) {
        console.log(error);
      }
    };
    getIngredients();
  }, []);

  return (
    <>
      <Scroll />
      {isLoading && <Loader pageHeight="100vh" />}
      {currentRecipe !== null ? (
        <>
          <RecipePageHero recipe={currentRecipe} isOwnRecipe={isOwnRecipe} />
          <RecipeInngredientsList
            ingredients={currentIngredients}
            ingList={listIngredients}
          />
          <RecipePreparation recipe={currentRecipe} />
        </>
      ) : (
        !isLoading && (
          <EmptyPage text="You currently don't have any favorite recipes added. Let's add some!" />
        )
      )}
    </>
  );
};

export default RecipePage;
