import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 28px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeights.title};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const Image = styled.img`
  height: 250px;
  width: 343px;
  object-fit: cover;
  border-radius: ${p => p.theme.radius.image};

  @media screen and (min-width: 768px) {
    height: 332px;
    width: 433px;
  }
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const ItemBox = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.userLink};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.formAddInputText};
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Label = styled.span`
  min-width: 21px;
  min-height: 21px;
  flex-basis: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fonts.main};
  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights.title};
  line-height: ${p => p.theme.lineHeights.body};
  border-radius: 50%;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.colorAccent};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
