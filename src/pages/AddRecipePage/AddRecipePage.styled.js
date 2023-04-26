
import styled from 'styled-components';

export const Page = styled.div`
  background-repeat: no-repeat;
  background-size: 6px 6px, 8px 8px, 8px 8px;
  background-position: 250px 90px, 105px 10px, 385px 45px;

  @media ${props => props.theme.device.tablet} {
    background-size: 12px 12px, 14px 14px, 14px 14px;
    background-position: 420px 90px, 200px 30px, 751px 10px;
  }

  @media ${props => props.theme.device.desktop} {
    background-size: 12px 12px, 14px 14px, 14px 14px;
    background-position: 820px 130px, 225px 50px, 1250px 10px;
  }
`;

export const SharedContainer = styled.div`
  margin-top: 72px;

  @media ${props => props.theme.device.desktop} {
    margin-top: 100px;
    display: flex;
    gap: 120px;
  }
`;

export const ContainerForm = styled.div`
  margin-bottom: 72px;

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 100px;
  }
  @media ${props => props.theme.device.desktop} {
    flex-grow: 1;
  }
`;

export const ContainerPopular = styled.div`
  @media ${props => props.theme.device.desktop} {
    width: 320px;
  }
`;

export const SocialsTitle = styled.b`
  display: block;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${p => p.theme.colors.primaryText};
`;
