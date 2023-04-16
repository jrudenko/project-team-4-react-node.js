import React from 'react';
import styled from 'styled-components';

export const CategoriesCardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  @media screen and (min-width: 768px) {
    gap: 0;
    margin: calc(-1 * 32px / 2);
  }
  @media screen and (min-width: 1440px) {
    margin: calc(-1 * 14px / 2);
  }
`;
export const CategoriesCardSetItem = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px * 2) / 2);
    margin: calc(32px / 2);
  }
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 14px * 4) / 4);
    margin: calc(14px / 4);
  }
`;
export const CardStyled = styled.div`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px * 2) / 2);
    margin: calc(32px / 2);
  }
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 32px * 4) / 4);
    margin: calc(32px / 4);
  }
`;

const ProductCard = ({ imgSrc, name }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default ProductCard;
