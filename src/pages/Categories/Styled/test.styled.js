import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Name = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const ProductCard = ({ name, image }) => {
  return (
    <CardContainer className="card">
      <ImageContainer image={image}>
        <Name>{name}</Name>
      </ImageContainer>
    </CardContainer>
  );
};

export default ProductCard;
