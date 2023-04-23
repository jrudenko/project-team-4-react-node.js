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
    /* color: #001833; */
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
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #fafafa;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const RecipeStyled = styled.div`
  background: url(${props => props.imgUrl});
  background-size: cover;

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

    /* background-color: #fff; */
    background-color: ${p => p.theme.colors.background};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;
    /* color: #3e4462; */
    color: ${p => p.theme.colors.primaryText};
    border-radius: 8px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default CategoryCardStyled;
