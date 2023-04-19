import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'components/Container/Container';
import fetchCategoryListFromAPI from './Axios/AxiosGetCategories';
import fetchRecipesFromCategory from './Axios/AxiosGetResieptsFromCategory';
import { CategoriesList } from './Styled/CategoriesList.styled';
import { StyledNavLink } from './Styled/CategoriesListItem.styled';
import {
  CategoriesCardSet,
  CategoriesCardSetItem,
} from './Styled/CategoriesTable.styled';
import ProductCard from '../../components/RecipeCard/Recipecard';
import { testRecipes } from './testVariables';
import Title from 'components/Title';
// import { StyledNav, StyledNavMenu } from './Styled/test.styled';

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
    setIsLoading(true);
    try {
      fetchCategoryListFromAPI().then(data => {
        console.log(data.categoryList);
        setCategories(data.categoryList);
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    try {
      setRecipes(fetchRecipesFromCategory(currentCategory));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [currentCategory]);

  useEffect(() => {
    if (!location.state || !location.state.fromMenu) {
      navigate(`/categories/${currentCategory}`);
    }
  }, [currentCategory, navigate, location.state]);

  const handleCategoryClick = category => {
    setCurrentCategory(category);
    console.log(categories);
  };

  return (
    <Container>
      <div>
        <Title>Categories</Title>
        <CategoriesList>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            categories.map(category => (
              <StyledNavLink
                to={`/categories/${category}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </StyledNavLink>
            ))
          )}
        </CategoriesList>
      </div>
      <div>
        <h1>Category: {currentCategory}</h1>
        {isLoading && <p>Loading recipes...</p>}
        {/* {!isLoading && recipes.length > 0 && ( )} */}
        <CategoriesCardSet>
          {testRecipes.map(recipe => (
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
