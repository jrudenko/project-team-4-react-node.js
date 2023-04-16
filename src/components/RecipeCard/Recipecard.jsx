import React from 'react';
import { CardWrapper, ImageWrapper, Name } from './Recipecard.styled';

const ProductCard = ({ imageUrl, name }) => {
  return (
    <CardWrapper imageUrl={imageUrl}>
      <ImageWrapper>
        <Name>{name}</Name>
      </ImageWrapper>
    </CardWrapper>
  );
};



export default ProductCard;