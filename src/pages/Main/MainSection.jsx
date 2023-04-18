import React from 'react';
import SearchMain from '../Main/Search';
import {
  MainWrapper,
  ChooseYourBreakfastWrapper,
  PreviewCategories,
} from './MainSection.styled';
import { ChooseYourBreakfast } from './ChooseYourBreakfast/ChooseYourBreakfast.styled';
import mainPasta from '../../images/kisspngPasta/unsplash-desktop.webp';

function MainPage() {
  //   function handleButtonClick() {
  //     console.log('Button clicked!');
  //   }

  return (
    <MainWrapper>
      <ChooseYourBreakfastWrapper>
        <ChooseYourBreakfast>
          <h2>So Yummy</h2>
          <p>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
          <img src={mainPasta} alt="mainPasta" style={{}} />
          <SearchMain />
        </ChooseYourBreakfast>
      </ChooseYourBreakfastWrapper>
      <PreviewCategories>
        <ul>
          Breakfast
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </PreviewCategories>
    </MainWrapper>
  );
}

export default MainPage;
