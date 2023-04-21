import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';
// import PageEmpty from 'components/PageEmpty';

import data from '../../recipes.json';

export default function MyRecipesList() {
  // Компонент подписан на коллекцию рецептов в store и передает их в MyRecipesItem. Если коллекция пустая, нужно отобразить PageEmpty
  return (
    <>
      <MyRecipesItem recipes={data} />
      {/* <PageEmpty text="Start adding own recipes right now!" /> */}
    </>
  );
}
