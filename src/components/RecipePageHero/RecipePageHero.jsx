import { Wrapper, HeroTitle, HeroText } from './RecipePageHero.styled';
import ButtonSkew from 'components/ButtonSkew';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {addFavorite, getFavorite, deleteFavorite} from '../../redux/ownRecipes/ownRecipesOperations';
import {getFavoriteRecipes} from '../../redux/ownRecipes/ownRecipesSelectors';

const RecipePageHero = () => {

const {recipeId} = useParams();

  const dispatch = useDispatch();
  const fatchFav = useSelector(getFavoriteRecipes);
  const isFavorite = fatchFav.favoriteRecipes.some(item => item._id === recipeId);
  const [isFav, setIsFav] = useState(isFavorite);

useEffect(() => {
dispatch(getFavorite())
}, [dispatch, isFav])

  return (
    <>
      <Wrapper>
        <HeroTitle>Salmon Avocado Salad</HeroTitle>
        <HeroText>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </HeroText>
        {!isFav ? (
          <ButtonSkew type="button" text="Add to favorite recipes"/>
        ) : (
          <ButtonSkew type="button" text="Remove from favorite recipes"/>
        )}
      </Wrapper>
    </>
  );
};

export default RecipePageHero;
