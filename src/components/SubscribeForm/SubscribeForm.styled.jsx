import styled from "styled-components";

export const SubForm=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

position: absolute;
width: 204px;
height: 84px;
left: 86px;
top: 270px;

@media (min-width: 768px) {
flex-direction: row;
gap: 12px;

width: 442px;
height: 50px;
left: 163px;
top: 292px;
}

@media (min-width: 1440px) {
flex-direction: column;
gap: 28px;

width: 339px;
height: 240px;
left: 1001px;
top: 64px;
}
`
export const InfoFrame = styled.div`
display: none;
@media (min-width:1440px) {
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 14px;

width: 339px;
height: 77px;
}
`

export const SubTitle = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: ${p=>p.theme.colors.whiteText};
`;

export const SubText=styled.p`
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: ${p=>p.theme.colors.whiteText};
`

export const FormFrame=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;

@media (min-width: 768px) {
flex-direction: row;
gap: 12px;
}

@media (min-width: 1440px) {
flex-direction: column;
align-items: center;
gap: 16px;

width: 339px;
height: 135px;
}
`
export const SubButton=styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 71px;
gap: 8px;

width: 204px;
height: 38px;

background:${p=>p.theme.button.primaryBag};
border-radius: 6px;

@media (min-width: 768px) {
padding: 16px 50px;

width: 171px;
height: 50px;
}
@media (min-width: 1440px) {
padding: 21px 138px;

width: 339px;
height: 60px;
}
`
export const SubInput=styled.div`
width: 204px;
height: 38px;

border: 1px solid #FAFAFA;
border-radius: 6px;
@media (min-width:768px) {
 width: 259px;
height: 50px;
}

@media (min-width: 1440px) {
 width: 338px;
height: 59px;
}
`
export const InputFrame = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;

position: absolute;
width: 148px;
height: 18px;
left: 14px;
top: 10px;

font-size: 10px;
line-height: 15px;
letter-spacing: -0.02em;
background-color:${p=>p.theme.labelText};
@media (min-width: 768px) {
justify-content: center;
gap: 16px;

width: 204px;
height: 20px;
left: 15px;
top: 15px;
}
@media (min-width: 1440px) {
width: 252px;
height: 24px;
left: 16px;
top: 17.5px;
}
`

