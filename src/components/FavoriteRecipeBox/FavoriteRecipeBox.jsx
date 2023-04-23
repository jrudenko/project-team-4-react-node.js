import { NavLink } from 'react-router-dom';
import ButtonDelete from 'components/ButtonDelete';
import NavLinkSkew from 'components/NavLinkSkew';
import { useMediaQuery } from 'hooks/useMedia';

import {
  DataWrapper,
  BoxWrapper,
  ImageWrapper,
  FavoriteRecipeBoxWrapper,
  SubTitle,
  Time,
  TimeWrapper,
  TitleWrapper,
} from './FavoriteRecipeBox.styled';

const FavoriteRecipeBox = ({ location, id, text, title, img, time }) => {
  const isRowBased = useMediaQuery('(min-width: 768px)');

  return (
    <FavoriteRecipeBoxWrapper location={location}>
      {!isRowBased && location === 'favorite' ? (
        <NavLink to={`/recipe/${id}`}>
          <ImageWrapper location={location}>
            <img src={img} alt={title} />
          </ImageWrapper>
        </NavLink>
      ) : (
        <ImageWrapper location={location}>
          <img src={img} alt={title} />
        </ImageWrapper>
      )}
      <DataWrapper location={location}>
        <TitleWrapper>
          <SubTitle>
            <h3>{title}</h3>
          </SubTitle>
          {isRowBased && location === 'favorite' && (
            <ButtonDelete location={location} id={id} />
          )}
          {location === 'recipes' && <ButtonDelete location={location} id={id} />}
        </TitleWrapper>
        <BoxWrapper>{text}</BoxWrapper>
        <TimeWrapper>
          <Time>{time}</Time>
          {!isRowBased && location === 'recipes' && (
            <NavLinkSkew
              navigate={`/recipe/${id}`}
              location={location}
              text="See recipe"
              styled="olive"
            />
          )}
          {!isRowBased && location === 'favorite' && (
            <ButtonDelete location={location} id={id} />
          )}
          {isRowBased && (
            <NavLinkSkew
              navigate={`/recipe/${id}`}
              location={location}
              text="See recipe"
              styled={location === 'favorite' ? 'black' : 'olive'}
            />
          )}
        </TimeWrapper>
      </DataWrapper>
    </FavoriteRecipeBoxWrapper>
  );
};

export default FavoriteRecipeBox;
