import styled from 'styled-components';
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

export const Conteiner = styled.div`
  display: flex;
  padding: 0px;
  gap: 20px;
`;

export const Facebook = styled(BsFacebook)`
  width: 26px;
  height: 26px;
  color: ${p => p.theme.colors.footerSocialIcons};
  :hover,
  :focus{
    color: ${p => p.theme.colors.folowUsIconHover};
    transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const Youtube= styled(BsYoutube)`
  width: 28px;
  height: 22px;
  color: ${p => p.theme.colors.footerSocialIcons};
  :hover,
  :focus{
    color: ${p => p.theme.colors.folowUsIconHover};
    transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const Twitter= styled(BsTwitter)`
  width: 25px;
  height: 22px;
  color: ${p => p.theme.colors.footerSocialIcons};
  :hover,
  :focus{
    color: ${p => p.theme.colors.folowUsIconHover};
    transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const Instagram= styled(BsInstagram)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.footerSocialIcons};
  :hover,
  :focus{
    color: ${p => p.theme.colors.folowUsIconHover};
    transform: scale(1.1);
    transform: scale(1.1);
  }
`;
