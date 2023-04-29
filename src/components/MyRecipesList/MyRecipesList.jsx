import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMyRecipes, deleteMyRecipe } from 'service/API';
import MyRecipeItem from 'components/RecipeItem';
import { List } from 'components/FavoriteList/FavoriteList.styled';
import { Loader } from 'components/Loader/Loader';
import { Paginator } from 'components/Paginator/Paginator';
import EmptyPage from '../EmptyPage';

export default function MyRecipesList() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(1);

  const itemsPerPage = 4;

  // const fetchMyRecipes = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { recipes, pagination } = await getMyRecipes();
  //     setMyRecipes(recipes);
  //     setTotalItems(pagination.totalResults);
  //   } catch (error) {
  //     toast.error('Something gone wrong by getting my recipes');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchMyRecipes();
  // }, []);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        setIsLoading(true);
        const { recipes, pagination } = await getMyRecipes(page, itemsPerPage);
        setMyRecipes(recipes);
        setTotalItems(pagination.totalResults);
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
      await deleteMyRecipe(id);
      const { recipes, pagination } = await getMyRecipes(page, itemsPerPage);
      setMyRecipes(recipes);
      setPage(pagination.currentPage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <List>
      {isloading && <Loader />}
      {myRecipes.length > 0 && !isloading && (
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
      {myRecipes.length > 0 && !isloading && (
        <Paginator
          perPage={itemsPerPage}
          totalData={totalItems}
          setPage={setPage}
        />
      )}
    </List>
  );
}
