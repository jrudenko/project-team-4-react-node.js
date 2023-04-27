import styled from 'styled-components';
import { BsYoutube, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

export const MediaConteiner = styled.div`
  display: flex;
  padding: 0px;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 18px;
  }
`;

export const FacebookIcon = styled(BsFacebook)`
  color: ${p => p.theme.colors.colorAccent};
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;

export const YoutubeIcon = styled(BsYoutube)`
  color: ${p => p.theme.colors.colorAccent};
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;
export const TwitterIcon = styled(BsTwitter)`
  color: ${p => p.theme.colors.colorAccent};
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;

export const InstagramIcon = styled(BsInstagram)`
  color: ${p => p.theme.colors.colorAccent};
  &:hover {
    color: ${p => p.theme.colors.white};
  }
`;
