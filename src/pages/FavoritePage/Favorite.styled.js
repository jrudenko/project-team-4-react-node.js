import styled from 'styled-components';

const FavoriteWrapper = styled.section`
  width: 343px;
  margin: 0 auto;
  background-color: transparent;
  @media ${props => props.theme.device.tablet} {
    width: 704px;
  }
  @media ${props => props.theme.device.desktop} {
    min-width: 1240px;
  }
`;
export default FavoriteWrapper;
