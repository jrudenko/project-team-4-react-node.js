// import FavoriteRecipeBox from 'components/FavoriteRecipeBox';
import { ContentWrapper } from './MyRecipesItem.styled';

// import defaultImg from '../../images/default.jpg';

export default function MyRecipesItem({ recipes }) {
  return (
    <ContentWrapper>
      {recipes.map(({ _id, title, thumb, instructions, time }) => (
        <li key={_id.$oid}>
          {/* <FavoriteRecipeBox
            location="recipes"
            id={_id.$oid}
            img={thumb ?? defaultImg}
            title={title ?? 'No name'}
            text={<span>{instructions ?? 'No description'}</span>}
            time={time ? `${time} min` : 'No info'}
          /> */}
        </li>
      ))}
    </ContentWrapper>
  );
}
