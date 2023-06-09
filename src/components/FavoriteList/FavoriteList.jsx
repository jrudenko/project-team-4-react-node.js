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
      if (data.favoriteRecipes.length > 0) {
        setAllRecipes(data.favoriteRecipes);
      }

    } catch (error) {
      toast.error('Something went wrong by getting recipes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const handleDelete = async _id => {
    try {
      await deleteFavoriteRecipe(_id);
      const data = await getFavoriteRecipes();
      setAllRecipes(data);
      setCurrentItems(data.favoriteRecipes
);

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
          currentItems.map(({ description, preview, time, title, _id }) => (
            <MyRecipeItem
              key={_id}
              description={description}
              preview={preview}
              time={time}
              title={title}
              id={_id}
              handleDelete={handleDelete}
            />
          ))}
        {allRecipes.length === 0 && !loading && (
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
