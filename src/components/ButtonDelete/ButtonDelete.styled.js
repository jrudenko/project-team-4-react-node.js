import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';

export const BtnDel = styled.button`
  background-color: ${props => props.theme.colors.deleteButton};
  color: ${props => props.theme.colors.heroText};
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border-color: transparent;
  font-size: 14px;
  text-align: center;
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
  :hover,
  :focus {
    background-color: ${props =>
      ({
        black: props.theme.colors.accent,
        green: props.theme.colors.green,
      }[props.battonDel])};
    color: ${props =>
      ({
        black: props.theme.colors.textWhite,
        green: props.theme.colors.whiteMuted,
      }[props.battonDel])};
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  color: ${props => props.theme.colors.heroText};
  cursor: pointer;
`;
