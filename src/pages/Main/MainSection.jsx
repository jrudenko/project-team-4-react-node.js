import React from 'react';
import SearchMain from '../Main/Search';
import { useSearchParams } from 'react-router-dom';
import {
  ChooseYourBreakfastWrapper,
  IMG,
  Title,
  Title2,
  ContentWrapper,
} from './MainSection.styled';

import mainPasta from '../../images/kisspngPasta/unsplash-desktop.webp';
import ChooseYourBreakfast from 'components/ChooseYourBreakfast';
import Container from 'components/Container/Container';

// import PreviewCategorie from 'components/PreviewCategorie/PreviewCategorie';
// import RecipesList from 'components/RecipesList/RecipesList';
// import recipes from '../../recipes.json';
// import Preview from './PreviewCategories/Preview/Preview';

function MainPage() {
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
      <IMG>
        <img src={mainPasta} alt="mainPasta" />
      </IMG>
      <ContentWrapper>
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

          <SearchMain
            style={{ color: 'black' }}
            onSubmit={updateQuery}
            queryParam={searchQuery}
          />
          {/* <PreviewCategorie /> */}
        </ChooseYourBreakfastWrapper>
      </ContentWrapper>
      {/* <RecipesList recipes={recipes} /> */}
      {/* <Preview /> */}
    </Container>
  );
}
export default MainPage;

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
