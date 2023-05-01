import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import fetchCategoryListFromAPI from './Axios/AxiosGetCategories';
import fetchRecipesFromCategory from './Axios/AxiosGetResieptsFromCategory';
import { CategoriesList } from './Styled/CategoriesList.styled';
import { StyledNavLink } from './Styled/CategoriesListItem.styled';
import {
  CategoriesCardSet,
  CategoriesCardSetItem,
  ConteinerCategoriListStyled,
} from './Styled/CategoriesTable.styled';
import ProductCard from '../../components/RecipeCard/Recipecard';
import Title from 'components/Title';
import { Loader } from 'components/Loader/Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  // activeStyle

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchCategoryListFromAPI().then(data => {
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
      fetchRecipesFromCategory(currentCategory).then(data => {
        setRecipes(data);
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
    console.log();
  }, [currentCategory]);

  useEffect(() => {
    if (!location.state || !location.state.fromMenu) {
      navigate(`/categories/${currentCategory}`);
    }
  }, [currentCategory, navigate, location.state]);

  const handleCategoryClick = category => {
    setCurrentCategory(category);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    responsive: [ 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Title>Categories</Title>
       
        <CategoriesList>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {categories.map((category, index) => (
                <StyledNavLink
                to={`/categories/${category}`}
                key={index}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </StyledNavLink>
              ))}
            </Slider>
          )}
        </CategoriesList>
      </div>
      <div>
        {isLoading && <p>Loading recipes...</p>}
        {!isLoading && recipes.length > 0 && (
          <ConteinerCategoriListStyled>
            <CategoriesCardSet>
              {recipes.map(recipe => (
                <CategoriesCardSetItem key={recipe.id}>
                  <Link to={`/recipe/${recipe.id}`}>
                    <ProductCard imageUrl={recipe.preview} name={recipe.name} />
                  </Link>
                </CategoriesCardSetItem>
              ))}
            </CategoriesCardSet>
          </ConteinerCategoriListStyled>
        )}
        {isLoading && (
          <div
            style={{
              margin: '30px 0px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Loader />
          </div>
        )}
        {!isLoading && recipes.length === 0 && (
          <p>No recipes found for this category</p>
        )}
      </div>
    </>
  );
};

export default CategoriesPage;
