import Title from '../../components/Title';
import Container from 'components/Container';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

export default function MyRecipesPage() {
  //   Компонент виконує запит на бекенд по власні рецепти користувача, якщо вони відсутні в стейті. Якщо відповідь:
  //  - успішна - записує отриману колекцію в store
  //  - помилка - виводить користувачу відповідне повідомлення на сторінку замість компонентів MyRecipesList та Paginator
  return (
    <Container>
      <Title>My recipes</Title>
      <MyRecipesList />
    </Container>
  );
}
