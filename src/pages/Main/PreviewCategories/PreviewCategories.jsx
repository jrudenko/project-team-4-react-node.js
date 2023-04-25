import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getCategoryList from '../../../service/API/getCategoryList';
// import CategoryCard from './Preview/CategotyCard';
import PreviewCategoriesStyled from './PreviewCategories.styled';
import { Button } from './PreviewCategories.styled';

const PreviewCategories = () => {
  const [popularCategories, setPopularCategories] = useState([]);
  const [loading, setLoading] = useState(true); // новое состояние
  const token = useSelector(state => state.auth.token);
  // const receiveCategories = async () => {
  //   const dataReceived = await getCategoryList(token);
  //   setPopularCategories(dataReceived);
  //   console.log(dataReceived);

  // };

  useEffect(() => {
    const receiveCategories = async () => {
      const dataReceived = await getCategoryList(token);
      setPopularCategories(dataReceived);
      console.log(dataReceived);
    };
    receiveCategories().finally(() => {
      setLoading(false); // установка loading в false, когда данные получены
    });
  }, [token]);
  console.log(popularCategories);

  // useEffect(() => {
  //   receiveCategories();
  //   // eslint-disable-next-line
  //   console.log(popularCategories);
  // }, []);
  if (loading) {
    return <div>Loading...</div>; // заглушка, пока данные не загружены
  }
  return (
    <PreviewCategoriesStyled>
      {popularCategories &&
        popularCategories.map(category => (
          // <CategoryCard
          //   key={`cat_key${category[0].id}`}
          //   name={category[0].category}
          //   popular={category}
          // />
          <li key={category.id}>
            <h2>{category.title}</h2>
            {category.category}
          </li>
        ))}
      <Button
        to="/categories/Beef"
        look="rounded_other"
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
  );
};

export default PreviewCategories;
