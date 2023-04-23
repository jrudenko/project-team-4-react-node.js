import styled from 'styled-components';

export const ContentWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;
