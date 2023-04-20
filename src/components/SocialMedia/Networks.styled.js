import styled from 'styled-components';
import { SiFacebook, SiYoutube, SiTwitter, SiInstagram } from 'react-icons/si';

export const MediaConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 14px;

  position: absolute;
  width: 119px;
  height: 19px;
  left: 128px;
  top: 398px;
  @media (min-width: 768px) {
    gap: 18px;
    width: 134px;
    height: 19px;
    left: 317px;
    top: 380px;
  }
  @media (min-width: 1440px) {
    left: 653px;
    top: 345px;
  }
`;

export const FacebookIcon = styled(SiFacebook)`
  color: ${p => p.theme.colors.colorAccent};
  width: 20px;
  height: 20px;
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;

export const YoutubeIcon = styled(SiYoutube)`
  color: ${p => p.theme.colors.colorAccent};
  width: 20px;
  height: 15px;
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;
export const TwitterIcon = styled(SiTwitter)`
  color: ${p => p.theme.colors.colorAccent};
  width: 20px;
  height: 16px;
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;

export const InstagramIcon = styled(SiInstagram)`
  color: ${p => p.theme.colors.colorAccent};
  width: 20px;
  height: 20px;
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;
