import React from 'react';
import SearchMain from '../Main/Search';
import { useSearchParams, NavLink } from 'react-router-dom';
import {
  ChooseYourBreakfastWrapper,
  IMG,
  Title,
  Title2,
} from './MainSection.styled';

import mainPasta from '../../images/kisspngPasta/unsplash-desktop.webp';
// import PreviewCategorie from 'components/PreviewCategorie/PreviewCategorie';
import RectangularButton from 'components/ButtonRectangular/ButtonRectangular';
import ChooseYourBreakfast from './ChooseYourBreakfast/ChooseYourBreakfast';
// import SearchForm from 'components/SearchForm/SearchForm';
import RecipesList from 'components/RecipesList/RecipesList';
import recipes from '../../recipes.json';
import Container from 'components/Container/Container';

function MainPage() {
  function handleButtonClick() {
    console.log('Button clicked!');
  }
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams =
      normalizedQuery !== '' ? { query: normalizedQuery, type: 'title' } : {};
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <ChooseYourBreakfastWrapper>
        <ChooseYourBreakfast />
        <Title>
          So
          <span>Yummy</span>
        </Title>
        <Title2>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </Title2>
        <IMG>
          <img src={mainPasta} alt="mainPasta" />
        </IMG>
        <SearchMain
          style={{ color: 'black' }}
          onSubmit={updateQuery}
          queryParam={searchQuery}
        />
        {/* <SearchForm /> */}
        {/* <PreviewCategorie /> */}
        <NavLink to={`/categories/:categoryName`}>
          <RectangularButton
            onClick={handleButtonClick}
            label="See recipes ->"
          />
        </NavLink>
      </ChooseYourBreakfastWrapper>

      <RecipesList recipes={recipes} />
    </Container>
  );
}

export default MainPage;
