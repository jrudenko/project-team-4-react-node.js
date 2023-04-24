import  ButtonDel  from '../ButtonDelete';
import Button  from '../Button';

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
} from './MyRecipeItem.styled';
import { useLocation } from 'react-router-dom';

const MyRecipeItem = ({
  description,
  preview,
  time,
  title,
  id,
  handleDelete,
  styleDel,
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