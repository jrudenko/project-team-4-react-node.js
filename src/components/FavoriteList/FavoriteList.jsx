import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getFavoriteRecipes,
  deleteFavoriteRecipe,
} from 'service/API/index';
import MyRecipeItem from 'components/MyRecipesItem/MyRecipesItem';
import { Loader } from 'components/Loader/Loader';
import EmptyPage  from 'components/EmptyPage';

import { List } from './FavoriteList.styled.js';
import { Paginator } from 'components/Paginator/Paginator.jsx';

const FavoriteList = () => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 4;

  const getFavorites = async () => {
    try {
      setLoading(true);
      const data = await getFavoriteRecipes();
      console.log(data);
      if (data.favoriteRecipes.length > 0) {
        setAllRecipes(data.favoriteRecipes);
        console.log("dddd", data.favoriteRecipes);
      }
      // setAllRecipes(data.favoriteRecipes);
      //   console.log();
    } catch (error) {
      toast.error('Something went wrong by getting recipes');
    } finally {
      setLoading(false);
    }
  };

  // useLayoutEffect(() => {
  //   getFavorites();
  // }, []);

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteFavoriteRecipe(id);
      const data = await getFavoriteRecipes();
      setAllRecipes(data);
      setCurrentItems(data);
    } catch (error) {
      toast.error('Something went wrong by removing recipe');
    }
  };

  return (
    <>
      <List>
        {loading && <Loader />}
        {currentItems.length !== 0 &&
          !loading &&
          currentItems.map(({ description, preview, time, title, id }) => (
            <MyRecipeItem
              key={id}
              description={description}
              preview={preview}
              time={time}
              title={title}
              id={id}
              handleDelete={handleDelete}
            />
          ))}
        {allRecipes.length === 0 && !loading && (
          // <ListText>You don't have your recipes</ListText>
          <EmptyPage text="You currently don't have any favorite recipes added. Let's add some!" />
        )}
      </List>
      {!!allRecipes.length && (
        <Paginator
          totalItems={allRecipes}
          perPage={itemsPerPage}
          setCurrentItems={setCurrentItems}
        />
      )}
    </>
  );
};

export default FavoriteList;
