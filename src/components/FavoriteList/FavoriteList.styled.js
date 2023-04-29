import styled from 'styled-components';

export const List = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 40px;

  @media ${props => props.theme.device.tablet} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;

export const ListText = styled.h3`
  font-size: 20px;
  color: ${p => p.theme.colors.heroText};
  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
    color: ${p => p.theme.colors.heroText};
  }
`;

export const ButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.textWhite};
  font-size: 14px;
  text-align: center;
  :hover,
  :focus {
    background: #22252a;
    color: ${props => props.theme.colors.textWhite};
    transform: scale(1.1);
    transform: scale(1.1);
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }
`;
