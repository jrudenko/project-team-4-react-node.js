import { Wrapper, HeroTitle, HeroText, WrapperTime, StyledClock} from './RecipePageHero.styled';
import ButtonSkew from 'components/ButtonSkew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteRecipes } from '../../service/API/index';



const RecipePageHero = () => {

  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState({});

  console.log(`allRecipes`, allRecipes)

  let time = "20";

const {recipeId} = useParams();

const [isFav, setIsFav] = useState(false);


  // const dispatch = useDispatch();

  useEffect(() => {
    if (allRecipes.favoriteRecipes?.length > 0) {

      const isFavorite = allRecipes.favoriteRecipes.some(item => item._id === recipeId);
      
      setIsFav(isFavorite)
    }
  }, [allRecipes, recipeId])
  
  
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

    getFavorites()
    }, [isFav])

// useEffect(() => {
// dispatch(getFavorites())
// }, [dispatch, isFav])

function addFavRecipe() {
  setIsFav(true);
  toast.success("Recipe added to favorite");
}

function removeFavRecipe() {
  setIsFav(false);
  toast.success("Recipe removed from favorite");
}

  return (
    <>
      <Wrapper>
        <HeroTitle>Salmon Avocado Salad</HeroTitle>
        <HeroText>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinandeflch, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </HeroText>
        {!isFav ? (
          <ButtonSkew type="button" text="Add to favorite recipes" fn={addFavRecipe}/>
        ) : (
          <ButtonSkew type="button" text="Remove from favorite recipes" fn={removeFavRecipe}/>
        )}
        { time &&  
        <WrapperTime>
          <StyledClock/>
          <span>{time + ` min`}</span>
        </WrapperTime>
         }
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Wrapper>
    </>
  );
};

export default RecipePageHero;
