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

  const testCategories = [
    { id: 1, name: 'Beef' },
    { id: 2, name: 'Breakfast' },
    { id: 3, name: 'Chicken' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Goat' },
    { id: 6, name: 'Lamb' },
    { id: 7, name: 'Miscellaneous' },
    { id: 8, name: 'Pasta' },
    { id: 9, name: 'Pork' },
    { id: 10, name: 'Seafood' },
    { id: 11, name: 'Side' },
    { id: 12, name: 'Starter' },
    { id: 13, name: 'Vegan' },
    { id: 14, name: 'Vegetarian' },
  ];
  const testRecipes = [
    {
      id: '640cd5ac2d9fecf12e8897f1',
      name: 'Pad See Ew',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/nl3ks6ugu4uafh8fp4ot.jpg',
    },

    {
      id: '640cd5ac2d9fecf12e8897f8',
      name: 'Irish stew',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',
    },

    {
      id: '640cd5ac2d9fecf12e8897ee',
      name: 'Bakewell tart',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/lygbfa7j94dgegmvnpas.jpg',
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    try {
      setCategories(fetchCategoryListFromAPI());
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
  };

  return (
    <Container>
      <div>
        <h1>Categories</h1>
        <CategoriesList>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            testCategories.map(category => (
              <StyledNavLink
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
