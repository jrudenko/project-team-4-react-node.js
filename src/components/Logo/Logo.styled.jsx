import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    margin-right: 187px;
    width: 44px;
    height: 44px;
  }
`;
