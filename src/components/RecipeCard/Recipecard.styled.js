import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  content: '';
  width: 343px;
  height: 323px;

  padding-top: 245px;
  background-image: url(${props => props.imageUrl});
  border-radius: 8px;
`;

export const ImageWrapper = styled.div`
  background-color: white;
  width: 307px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
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
`;
