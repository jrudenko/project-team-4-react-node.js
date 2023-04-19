import { useState} from 'react';
import RecipePageHero from 'components/RecipePageHero';

const RecipePage = () => {
    const [recipe, setRecipe] = useState({});

    return(
        <>
        <RecipePageHero recipe={recipe}/>
        </>
    )
}

export default RecipePage;