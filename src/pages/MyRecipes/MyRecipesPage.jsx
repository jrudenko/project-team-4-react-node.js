import Title from '../../components/Title';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import Scroll from '../../utils/scroll';

export default function MyRecipesPage() {
  return (
    <>
      <Title>My recipes</Title>
      <MyRecipesList />
      <Scroll />
    </>
  );
}
