import { useState} from 'react';
import RecipePageHero from 'components/RecipePageHero';

const RecipePage = () => {
    const [recipe, _] = useState({});

    return(
        <>
        <RecipePageHero recipe={recipe}/>
        </>
    )
}

export default RecipePage;