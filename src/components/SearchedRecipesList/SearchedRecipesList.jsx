import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import RecipesList from 'components/RecipesList/RecipesList';

export default function SearchedRecipesList() {
  const [recipes, setRecipes] = useState(null);
  const [searchParams] = useSearchParams();

  // const dispatch = useDispatch();

  const searchQuery = searchParams.get('query') ?? '';
  const searchType = searchParams.get('type') ?? '';

  useEffect(() => {
    if (searchQuery === '' || searchType === '') {
      return;
    }
    // Fetch data from server
    setRecipes([]);
  }, [searchQuery, searchType]);

  return (
    <>
      {recipes ? (
        (recipes.length === 0 && <div></div>) ||
        (recipes.length > 0 && <RecipesList recipes={recipes} />)
      ) : (
        <p>Enter your search query</p>
      )}

      {/* {recipes.length === 0 && <div></div>}
      {recipes.length > 0 && <RecipesList recipes={recipes} />}
      {!recipes && <p>Enter your search query</p>} */}
    </>
  );
}
