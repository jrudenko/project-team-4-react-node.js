import PreviewCategories from './PreviewCategories/PreviewCategories';
import СhooseYourBreakfast from 'components/ChooseYourBreakfast';
import MainSearchPage from './Search/SearchMain';

import MainPageStyled from './MainSection.styled';

const MainPage = () => {
  return (
    <>
      <MainPageStyled>
        <h1>
          <span>So</span>Yummy
        </h1>
        <p>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <div>
          <СhooseYourBreakfast />
          <MainSearchPage />
        </div>
      </MainPageStyled>
      <PreviewCategories />
    </>
  );
};

export default MainPage;
