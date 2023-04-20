import { Wrapper, HeroTitle, HeroText } from './RecipePageHero.styled';
import ButtonSkew from 'components/ButtonSkew';

const RecipePageHero = () => {
  return (
    <>
      <Wrapper>
        <HeroTitle>Salmon Avocado Salad</HeroTitle>
        <HeroText>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </HeroText>
        <ButtonSkew
          type="button"
          text="Remove from favorite recipes"
        />
      </Wrapper>
    </>
  );
};

export default RecipePageHero;
