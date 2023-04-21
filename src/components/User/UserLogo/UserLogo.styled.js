import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
position: relative;
`;

export const UserBtn = styled.button`
display: flex;
gap: 14px;
justify-content: space-between;
align-items: center;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
& img {
    width: 34px;
    height: 34px;
    border-radius: 50px;
    object-fit: cover;
     @media (min-width: 768px) {
        width: 44px;
        height: 44px;
  }
}
`;

export const UserName = styled.p`
width: 37px;
height: 20px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 1,7;

color: #22252A;
@media (min-width: 768px) {
    width: 43px;
    height: 24px;
    font-size: 14px;
  }
`