import PreviewCategories from 'components/PreviewCategories/PriviewCategories';
import СhooseYourBreakfast from 'components/ChooseYourBreakfast';
import MainSearch from './Search/SearchMain';

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
          <MainSearch />
        </div>
      </MainPageStyled>
      <PreviewCategories />
    </>
  );
};

export default MainPage;

// test
// import React from 'react';
// import SearchMain from '../Main/Search';
// import { useSearchParams } from 'react-router-dom';
// import {
//   ChooseYourBreakfastWrapper,
//   IMG,
//   Title,
//   Title2,
//   ContentWrapper,
// } from './MainSection.styled';

// import mainPasta from '../../images/kisspngPasta/unsplash-desktop.webp';
// import ChooseYourBreakfast from 'components/ChooseYourBreakfast';
// import Container from 'components/Container/Container';
// // import PreviewCategories from '../Main/PreviewCategories/PreviewCategories';

// // import RecipesList from 'components/RecipesList/RecipesList';
// // import recipes from '../../recipes.json';
// // import Preview from './PreviewCategories/Preview/Preview';

// function MainPage() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const searchQuery = searchParams.get('query') ?? '';

//   const updateQuery = query => {
//     const normalizedQuery = query.toLowerCase().trim();
//     const nextParams =
//       normalizedQuery !== '' ? { query: normalizedQuery, type: 'title' } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <Container>
//       <IMG>
//         <img src={mainPasta} alt="mainPasta" />
//       </IMG>
//       <ContentWrapper>
//         <ChooseYourBreakfastWrapper>
//           <ChooseYourBreakfast />
//           <Title>
//             So
//             <span>Yummy</span>
//           </Title>
//           <Title2>
//             "What to cook?" is not only a recipe app, it is, in fact, your
//             cookbook. You can add your own recipes to save them for the future.
//           </Title2>

//           <SearchMain
//             style={{ color: 'black' }}
//             onSubmit={updateQuery}
//             queryParam={searchQuery}
//           />
//           {/* <PreviewCategorie /> */}
//         </ChooseYourBreakfastWrapper>
//       </ContentWrapper>
//       {/* <RecipesList recipes={recipes} /> */}
//       {/* <Preview /> */}
//       {/* <PreviewCategories /> */}
//     </Container>
//   );
// }
// export default MainPage;

// import React from 'react';
// import SearchMain from '../Main/Search';
// import { useSearchParams } from 'react-router-dom';
// import {
//   ChooseYourBreakfastWrapper,
//   IMG,
//   Title,
//   Title2,
//   ContentWrapper,
// } from './MainSection.styled';

// import mainPasta from '../../images/kisspngPasta/unsplash-desktop.webp';
// // import PreviewCategorie from 'components/PreviewCategorie/PreviewCategorie';

// import ChooseYourBreakfast from 'components/ChooseYourBreakfast';
// // import RecipesList from 'components/RecipesList/RecipesList';
// // import recipes from '../../recipes.json';
// import Container from 'components/Container/Container';

// function MainPage() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const searchQuery = searchParams.get('query') ?? '';

//   const updateQuery = query => {
//     const normalizedQuery = query.toLowerCase().trim();
//     const nextParams =
//       normalizedQuery !== '' ? { query: normalizedQuery, type: 'title' } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <Container>
//       <IMG>
//         <img src={mainPasta} alt="mainPasta" />
//       </IMG>
//       <ContentWrapper>
//         <ChooseYourBreakfastWrapper>
//           <ChooseYourBreakfast />
//           <Title>
//             So
//             <span>Yummy</span>
//           </Title>
//           <Title2>
//             "What to cook?" is not only a recipe app, it is, in fact, your
//             cookbook. You can add your own recipes to save them for the future.
//           </Title2>

//           <SearchMain
//             style={{ color: 'black' }}
//             onSubmit={updateQuery}
//             queryParam={searchQuery}
//           />
//           {/* <PreviewCategorie /> */}
//         </ChooseYourBreakfastWrapper>
//       </ContentWrapper>
//       {/* <RecipesList recipes={recipes} /> */}
//     </Container>
//   );
// }

// export default MainPage;
