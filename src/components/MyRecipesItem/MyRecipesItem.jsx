import ButtonDel from 'components/ButtonDelete';
import Button from 'components/Button';

import {
  CardItem,
  ImgBox,
  Image,
  Info,
  Title,
  Description,
  Time,
  ButtonDelete,
  ButtonWrapper,
} from './MyRecipesItem.styled';
import { useLocation } from 'react-router-dom';

const MyRecipeItem = ({
  description,
  preview,
  time,
  title,
  id,
  handleDelete,
  // styleDel,
}) => {
  const location = useLocation();
  return (
    <CardItem>
      <ImgBox>
        <Image src={preview} alt={title} />
      </ImgBox>
      <Info>
        <div>
          <Title>{title}</Title>
          <ButtonDelete onClick={() => handleDelete(id)}>
            <ButtonDel />
          </ButtonDelete>
          <Description>{description}</Description>
        </div>
        <div>
          <ButtonWrapper>
            <Time>{time} min</Time>
            <Button
              state={{ from: location }}
              to={`/recipe/${id}`}
              look="rounded"
              width="87px"
              heigth="27px"
              widthTablet="138px"
              heigthTablet="45px"
              heigthDesktop="54px"
              widthDesktop="160px"
              fontSize="10px"
              fontSizeTablet="14px"
              fontSizeDesktop="16px"
              lineHeight="15px"
              lineHeightTablet="21px"
              lineHeightDesktop="24px"
            >
              See recipe
            </Button>
          </ButtonWrapper>
        </div>
      </Info>
    </CardItem>
  );
};

export default MyRecipeItem;



// // import FavoriteRecipeBox from 'components/FavoriteRecipeBox';
// import { ContentWrapper } from './MyRecipesItem.styled';

// // import defaultImg from '../../images/default.jpg';

// export default function MyRecipesItem({ recipes }) {
//   return (
//     <ContentWrapper>
//       {recipes.map(({ _id, title, thumb, instructions, time }) => (
//         <li key={_id.$oid}>
//           {/* <FavoriteRecipeBox
//             location="recipes"
//             id={_id.$oid}
//             img={thumb ?? defaultImg}
//             title={title ?? 'No name'}
//             text={<span>{instructions ?? 'No description'}</span>}
//             time={time ? `${time} min` : 'No info'}
//           /> */}
//         </li>
//       ))}
//     </ContentWrapper>
//   );
// }
