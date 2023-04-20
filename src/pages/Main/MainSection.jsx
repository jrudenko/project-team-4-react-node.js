import React from 'react';
import SearchMain from '../Main/Search';
import { useSearchParams } from 'react-router-dom';
import {
  MainWrapper,
  ChooseYourBreakfastWrapper,
  IMG,
  Title,
  Title2,
} from './MainSection.styled';

import mainPasta from '../../images/kisspngPasta/unsplash-desktop.webp';
import PreviewCategorie from 'components/PreviewCategorie/PreviewCategorie';
import RectangularButton from 'components/ButtonRectangular/ButtonRectangular';
import ChooseYourBreakfast from './ChooseYourBreakfast/ChooseYourBreakfast';
import SearchForm from 'components/SearchForm/SearchForm';

function MainPage() {
  //   function handleButtonClick() {
  //     console.log('Button clicked!');
  //   }
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams =
      normalizedQuery !== '' ? { query: normalizedQuery, type: 'title' } : {};
    setSearchParams(nextParams);
  };

  return (
    <MainWrapper>
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
        <SearchMain />
        <SearchForm onSubmit={updateQuery} queryParam={searchQuery} />
        <PreviewCategorie />
        <RectangularButton></RectangularButton>
      </ChooseYourBreakfastWrapper>
    </MainWrapper>
  );
}

export default MainPage;
