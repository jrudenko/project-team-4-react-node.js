import styled from 'styled-components';

export const ModalWrapper = styled.div`
   position: absolute;
   top:100%;
   width: 161px;
   height: 130px;
   padding: 18px;
   border: 1px solid '#8BAA36';
   border-radius: 8px;
   background-color: '#FAFAFA';
   @media (min-width: 768px) {
     width: 177px;
     height: 134px;
     border: none;
   }
 `;

export const EditProfile = styled.div`
 display: flex;
 justify-content: space-between;
 font-weight: 500;
 font-size: 14px;
 line-height: 1.6;
 `;

export const EditBtn = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 border: none;
 padding: 4px;
 cursor: pointer;
 background: transparent;
 color: '#23262A';
 `

 // export const EditInputIcon = styled.img`
 // position: absolute;
 // top: 50%;
 // left: 100%;
 // transform: translate(-100%, -50%);
 // display: block;
 // width: 14px;
 // height: 14px;
 // `;


 export const EditInputIcon = styled.img`
 `;
export const LogoutBtn = styled.button`
 margin-top: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 color: #FAFAFA;
 font-family: 'Poppins';
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 cursor: pointer;
 border-radius: 24px 44px;
 border: none;
 padding: 12px 24px;
 :hover {
   background-color: '#8baa36';
   border-color: '#8baa36';
   }
 @media (min-width: 768px) {
   margin-top:32px;
   }
 `;

// export const LogoutIcon = styled.img`
// position: absolute;
// display: block;
// top: 50%;
// left: 80%;
// transform: translate(-100%, -50%);
// width: 18px;
// height: 18px;
// `;

export const LogoutIcon = styled.img`
`;

// background-color: ${p => p.theme.colors.mainBgColor};