import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getCategoryList from '../../../service/API/getCategoryList';
import CategoryCard from './Preview/CategotyCard';
import PreviewCategoriesStyled from './PreviewCategories.styled';
import { Button } from './PreviewCategories.styled';
import { useNavigate } from 'react-router-dom';

const PreviewCategories = () => {
  const navigate = useNavigate();
  const [popularCategories, setPopularCategories] = useState([]);
  const [loading, setLoading] = useState(true); // новое состояние
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    const receiveCategories = async () => {
      const dataReceived = await getCategoryList(token);
      setPopularCategories(dataReceived);
    };
    receiveCategories().finally(() => {
      setLoading(false); // установка loading в false, когда данные получены
    });
  }, [token]);

  if (loading) {
    return <div>Loading...</div>; // заглушка, пока данные не загружены
  }

  const CategoryBeef = popularCategories.filter(c => c.category === 'Beef');
  const CategoryBreakfast = popularCategories.filter(
    c => c.category === 'Breakfast'
  );
  const CategoryChicken = popularCategories.filter(
    c => c.category === 'Chicken'
  );
  const CategoryDessert = popularCategories.filter(
    c => c.category === 'Dessert'
  );

  function handleClick() {
    navigate(`/categories/Beef`);
  }

  return (
    <>
      <PreviewCategoriesStyled>
        {CategoryBeef && <CategoryCard name={'Beef'} popular={CategoryBeef} />}
        {CategoryBreakfast && (
          <CategoryCard name={'Breakfast'} popular={CategoryBreakfast} />
        )}
        {CategoryChicken && (
          <CategoryCard name={'Chicken'} popular={CategoryChicken} />
        )}
        {CategoryDessert && (
          <CategoryCard name={'Dessert'} popular={CategoryDessert} />
        )}

        <Button
          onClick={handleClick}
          marginTop="100px"
          width="195px"
          heigth="47px"
          widthTablet="239px"
          widthDesktop="239px"
          heigthTablet="61px"
          heigthDesktop="61px"
          fontSize="14px"
          fontSizeTablet="16px"
          fontSizeDesktop="16px"
          lineHeight="21px"
          lineHeightTablet="24px"
          lineHeightDesktop="24px" 
        >
          Other categories
        </Button>
      </PreviewCategoriesStyled>
    </>
  );
};

export default PreviewCategories;
