import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonSkew from 'components/ButtonSkew';
import { Wrapper, HeroTitle, HeroText } from './RecipePageHero.styled';

const RecipePageHero = () => {
  let isFavorit = false;
  const [isFav, setIsFav] = useState(isFavorit);

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
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </HeroText>
        {!isFav ? (
          <ButtonSkew type="button" text="Add to favorite recipes" fn={addFavRecipe} />
        ) : (
          <ButtonSkew type="button" text="Remove from favorite recipes" fn={removeFavRecipe}/>
        )}
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
