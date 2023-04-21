import RecipePageHero from 'components/RecipePageHero';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import Container from 'components/Container';

const RecipePage = () => {
   

    return(
       <>
       <Container>
       <RecipePageHero/>
       <PopularRecipe/>
       </Container>
       </>
        
    )
}

export default RecipePage;