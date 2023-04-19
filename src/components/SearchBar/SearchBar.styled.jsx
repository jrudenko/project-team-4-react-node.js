import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;
