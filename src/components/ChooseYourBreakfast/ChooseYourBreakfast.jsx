import React from 'react';
import RectangularButton from 'components/ButtonRectangular/ButtonRectangular';
import { NavLink } from 'react-router-dom';
import { Title, Wrapper } from './ChooseYourBreakfast.styled';
// import BreakfastArrowSvg from 'components/СhooseYourBreakfast/BreakfastArrowSvg';

function ChooseYourBreakfast() {
  function handleButtonClick() {
    console.log('Button clicked!');
  }

  return (
    <Wrapper>
      <Title>
        Delicious and healthy
        <span>
          way to enjoy a variety of fresh ingredients in one satisfying meal
        </span>
      </Title>
      <NavLink to={`/categories/:categoryName`}>
        <RectangularButton onClick={handleButtonClick} label="See recipes ->" />
        {/* <BreakfastArrowSvg /> */}
      </NavLink>
    </Wrapper>
  );
}

export default ChooseYourBreakfast;
