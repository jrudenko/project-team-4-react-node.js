import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import RecipePageHero from 'components/RecipePageHero';
import RecipeInngredientsList from 'components/RecipeInngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import {
     selectRecipeById,
     selectOwnRecipeById,
   } from 'redux/recipe/recipeSelectors';
   import { getRecipeById, getOwnRecipeById } from 'redux/recipe/recipeOperation';
   import {getIngredientsList} from '../../service/API/serviseApi'




const RecipePage = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const recipe = useSelector(selectRecipeById);
  const ownRecipe = useSelector(selectOwnRecipeById);

  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isOwnRecipe, setOwnRecipe] = useState(null);

     const [currentRecipe, setCurrentRecipe] = useState(null);
     const [currentIngredients, setCurrentIngredients] = useState([])
     const [listIngredients, setListIngredients] = useState(null)
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
          setCurrentRecipe(recipe ?? ownRecipe);
        }, [recipe, ownRecipe]);

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
            console.log(error)
          }
        }
        getIngredients()
        }, [])


 return(
       <>
   
     {currentRecipe !== null ? (
<>
         <RecipePageHero recipe={currentRecipe} isOwnRecipe = {isOwnRecipe}/>
         <RecipeInngredientsList ingredients={currentIngredients} ingList = {listIngredients} />
         <RecipePreparation ingredients={currentIngredients}/>
</>
     ) : (<div>ERROR</div>)}
   
    </>
    )
}

export default RecipePage;
