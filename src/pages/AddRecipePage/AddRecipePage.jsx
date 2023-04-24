import Title from 'components/Title';
import Container from 'components/Container';
import AddRecipeForm from 'components/AddRecipeForm/RecipeDescriptionFields/AddRecipeForm';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';

const AddRecipePage = () => {
  return (
    <div>
      <Container>
        <Title>Add recipe</Title>
        <AddRecipeForm />
        <PopularRecipe />
      </Container>
    </div>
  );
};

export default AddRecipePage;
