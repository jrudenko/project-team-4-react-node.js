import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMyRecipes, deleteMyRecipe } from 'service/API';
import MyRecipeItem from 'components/RecipeItem';
import { List } from 'components/FavoriteList/FavoriteList.styled';
import { Loader } from 'components/Loader/Loader';
import EmptyPage from '../EmptyPage';

export default function MyRecipesList() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const fetchMyRecipes = async () => {
    try {
      setIsLoading(true);
      const { recipes } = await getMyRecipes();
      setMyRecipes(recipes);
    } catch (error) {
      toast.error('Something gone wrong by getting my recipes');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyRecipes();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteMyRecipe(id);
      const data = await getMyRecipes();
      setMyRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <List>
      {isloading && <Loader />}
      {myRecipes.length !== 0 && !isloading && (
        <ul>
          {myRecipes.map(({ description, preview, time, title, _id }) => (
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
        </ul>
      )}
      {myRecipes.length === 0 && !isloading && (
        <EmptyPage text="You don't have your recipes yet!" />
      )}
    </List>
  );
}
