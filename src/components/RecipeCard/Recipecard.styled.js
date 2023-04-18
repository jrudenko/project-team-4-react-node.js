import styled from 'styled-components';

export const CardWrapper = styled.div`
  min-width: 343px;
  min-height: 323px;
  padding-top: 245px;
  padding-bottom: 15px;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    min-width: 336px;
    min-height: 323px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 300px;
    min-height: 323px;
  }
`;

export const ImageWrapper = styled.div`
  background-color: white;
  width: 307px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: left;
  align-items: center;

  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    width: 268px;
  }
`;

export const Name = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-content: center;
  color: #3e4462;
  padding: 16px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
