import styled from 'styled-components';


export const Conteiner = styled.div`
  display: flex;
  padding: 0px;
  gap: 20px;
`;

export const LinkItem = styled.li`
 list-style-type: none;
 padding: 0;
 border: none;
  svg {
    color: ${p => p.theme.colors.footerSocialIcons};
    :hover,
    :focus{
      color: ${p => p.theme.colors.folowUsIconHover};
      transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
