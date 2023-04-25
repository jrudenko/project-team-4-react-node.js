import { useState, useEffect } from 'react';
import { getMyRecipes, deleteMyRecipe } from 'service/API';
import MyRecipeItem from 'components/RecipeItem';
import { List, ListText } from 'components/FavoriteList/FavoriteList.styled';

export default function MyRecipesList() {
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const data = await getMyRecipes();
        setMyRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
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
      {myRecipes ? (
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
      ) : (
        <ListText>You don't have your recipes yet</ListText>
      )}
    </List>
  );
}
