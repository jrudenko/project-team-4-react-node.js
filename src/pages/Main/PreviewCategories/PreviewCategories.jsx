import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getCategoryList from '../../../service/API/getCategoryList';
import CategoryCard from './Preview/CategotyCard';
import PreviewCategoriesStyled from './PreviewCategories.styled';
import { Button } from './PreviewCategories.styled';

const PreviewCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const token = useSelector(state => state.auth.token);
  const receiveCategories = async () => {
    const dataReceived = await getCategoryList(token);
    setPopularCategories(dataReceived);
  };

  useEffect(() => {
    receiveCategories();
    // eslint-disable-next-line
  }, []);

  return (
    <PreviewCategoriesStyled>
      {popularCategories &&
        popularCategories.map(category => (
          <CategoryCard
            key={`cat_key${category[0].id}`}
            name={category[0].category}
            popular={category}
          />
        ))}
      <Button to="/categories/Beef" look="rounded_other">
        Other categories
      </Button>
    </PreviewCategoriesStyled>
  );
};

export default PreviewCategories;
