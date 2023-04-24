import styled from 'styled-components';

export const TableHeader = styled.div`
  width: auto;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 8px;
  margin-left: -${p => p.theme.space[3]}px;
  margin-right: -${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.accentColor};
  @media screen and (min-width: 768px) {
    padding: 21px 32px;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 6px;
  }
  @media screen and (min-width: 1440px) {
    padding: 21px 40px;
  }
`;

export const TableTitle = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: ${({ theme, screenType }) => {
    switch (screenType) {
      case 'mobile':
        return `${theme.fontSizes.xs}px`;
      case 'tablet':
        return `${theme.fontSizes.m}px`;
      default:
        break;
    }
  }};
  line-height: 1.5;
  color: ${p => p.theme.colors.secondaryTextColor};
  &:first-child {
    margin-right: auto;
  }
  &:last-child {
    margin-left: ${({ theme, screenType }) => {
      switch (screenType) {
        case 'mobile':
          return `24px`;
        case 'tablet':
          return `78px`;
        case 'desktop':
          return `142px`;
        default:
          break;
      }
    }};
  }
`;

export const EmptyMessage = styled.p`
  margin: 50px auto;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.recipieDescSecondary};
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    font-size: ${p => p.theme.fontSizes.xl}px;
  }
`;