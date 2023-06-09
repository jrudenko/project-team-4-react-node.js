import styled from 'styled-components';

const CategoryCardStyled = styled.div`
  margin-bottom: 32px;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 50px;
    &:last-of-type {
      margin-bottom: 27px;
    }
  }
  @media ${props => props.theme.device.desktop} {
    &:last-of-type {
      margin-bottom: 8px;
    }
  }

  @media ${props => props.theme.device.desktop} {
    margin-bottom: 100px;
  }

  & > div:first-of-type {
    display: flex;
    flex-direction: row;
    @media ${props => props.theme.device.tablet} {
      gap: 32px;
      & > div {
        width: 336px;
      }
    }
    @media ${props => props.theme.device.desktop} {
      gap: 14px;
      & > div {
        width: 300px;
      }
    }
  }

  &:last-of-type {
    margin-bottom: 40px;
    @media ${props => props.theme.device.tablet} {
      margin-bottom: 32px;
    }
    @media ${props => props.theme.device.desktop} {
      margin-bottom: 16px;
    }
  }

  & > h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.02em;
    font-feature-settings: 'liga' off;
    color: ${p => p.theme.colors.heroText};
    margin-bottom: 32px;
    @media ${props => props.theme.device.tablet} {
      font-size: 44px;
      line-height: 44px;
      margin-bottom: 40px;
    }
    @media ${props => props.theme.device.desktop} {
      margin-bottom: 50px;
    }
  }

  & > button {
    display: block;
    padding: 10px 24px;
    background: #8aa936;
    border-radius: 6px;
    margin-left: auto;
    border: none;

    & > span {
      transition: color 0.2s ease-in-out;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #fafafa;
    }
    &:hover {
      cursor: pointer;
      &:hover span,
      &:focus span {
        color: #000000;
      }
    }
  }
`;

export const RecipeStyled = styled.div`
  background: url(${props => props.imgUrl});
  background-size: cover;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 343px;
  height: 323px;
  border-radius: 8px;
  margin-bottom: 24px;
  padding-top: 245px;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 40px;
  }

  @media ${props => props.theme.device.desktop} {
    margin-bottom: 50px;
    padding-top: 248px;
  }

  & > span {
    display: block;
    margin-left: 18px;
    margin-right: 18px;
    padding: 16px;
    background-color: ${p => p.theme.colors.background};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: ${p => p.theme.colors.primaryText};
    border-radius: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:before,
  &:focus:before {
    opacity: 1;
  }

  & > span {
    position: relative;
    z-index: 2;
  }
`;

export default CategoryCardStyled;
