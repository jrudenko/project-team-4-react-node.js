import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import fetchCategoryListFromAPI from './Axios/AxiosGetCategories';
import fetchRecipesFromCategory from './Axios/AxiosGetResieptsFromCategory';
import { CategoriesList } from './Styled/CategoriesList.styled';
import { StyledNavLink } from './Styled/CategoriesListItem.styled';
import {
  CategoriesCardSet,
  CategoriesCardSetItem,
} from './Styled/CategoriesTable.styled';
import ProductCard from '../../components/RecipeCard/Recipecard';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(
    categoryName || 'Beef'
  );

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      try {
        await fetchCategoryListFromAPI().then(data => {
          console.log(data);
          setCategories(data);
        });

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getRecipes = async () => {
      setIsLoading(true);
      try {
        const recipes = await fetchRecipesFromCategory(currentCategory);
        setRecipes(recipes);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getRecipes();
  }, [currentCategory]);

  useEffect(() => {
    if (!location.state || !location.state.fromMenu) {
      navigate(`/categories/${currentCategory}`);
    }
  }, [currentCategory, navigate, location.state]);

  const handleCategoryClick = category => {
    setCurrentCategory(category);
  };

  return (
    <Container>
      <div>
        <h1>Categories</h1>
        <CategoriesList>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            categories.map(category => (
              <StyledNavLink
                key={category.id}
                to={`/categories/${category.name}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </StyledNavLink>
            ))
          )}
        </CategoriesList>
      </div>
      <div>
        <h1>Category: {currentCategory}</h1>
        {isLoading && <p>Loading recipes...</p>}
        <CategoriesCardSet>
          {recipes.map(recipe => (
            <CategoriesCardSetItem key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <ProductCard imageUrl={recipe.preview} name={recipe.name} />
              </Link>
            </CategoriesCardSetItem>
          ))}
        </CategoriesCardSet>
        {!isLoading && recipes.length === 0 && (
          <p>No recipes found for this category</p>
        )}
      </div>
    </Container>
  );
};

export default CategoriesPage;

// import CategoriesPage from '../pages/Categories/CategoriesPage';
// import { Route, Routes } from 'react-router-dom';

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<CategoriesPage />}>
//           <Route path="*" element={<h1>Error</h1>} />
//         </Route>
//       </Routes>
//     </>
//   );
// };
