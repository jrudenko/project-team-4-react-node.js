import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMyRecipes, deleteMyRecipe } from 'service/API';
import MyRecipeItem from 'components/RecipeItem';
import { List } from 'components/FavoriteList/FavoriteList.styled';
import { ItemsList } from './MyRecipesList.styled';
import { Loader } from 'components/Loader/Loader';
import { Paginator } from 'components/Paginator/Paginator';
import EmptyPage from '../EmptyPage';

export default function MyRecipesList() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  const pageSize = 6;

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        setIsLoading(true);
        const { recipes, pagination } = await getMyRecipes(page, pageSize);
        setMyRecipes(recipes);
        setTotalItems(Number(pagination.totalResults));
      } catch (error) {
        toast.error('Something gone wrong by getting my recipes');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyRecipes();
  }, [page]);

  const handleDelete = async id => {
    try {
      setIsLoading(true);
      await deleteMyRecipe(id);
      setPage(1);
      const { recipes, pagination } = await getMyRecipes(page, pageSize);
      setMyRecipes(recipes);
      setTotalItems(Number(pagination.totalResults));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <List>
      {isloading && <Loader />}
      {myRecipes.length > 0 && !isloading && (
        <ItemsList>
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
        </ItemsList>
      )}
      {myRecipes.length === 0 && !isloading && (
        <EmptyPage text="You don't have your recipes yet!" />
      )}
      {myRecipes.length > 0 && !isloading && (
        <Paginator
          perPage={pageSize}
          totalData={totalItems}
          setPage={setPage}
          page={page}
        />
      )}
    </List>
  );
}
