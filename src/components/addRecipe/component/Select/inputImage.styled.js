import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
