import styled from 'styled-components';

export const ButSkewStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  font-weight: ${p => p.theme.fontWeights.body};
  line-height: ${p => p.theme.lineHeights.subheader};
  font-size: 14px;
  border-radius: 24px 44px;
  `;

  