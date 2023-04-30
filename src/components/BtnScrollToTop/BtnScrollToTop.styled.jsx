import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const BtnScr = styled.button`
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 30px;
	right: 30px;
	width: 40px;
	height: 40px;
	border: 2px solid #8BAA36;
	border-radius: 50%;
	background-color: ${p => p.theme.colors.secondaryBg};
	cursor: pointer;
	z-index: 99;
	transition: ${p => p.theme.transitions.main};

	@media screen and (min-width: 768px) {
	  width: 50px;
	  height: 50px;
	  border: 2px solid #8BAA36;
  }
   @media screen and (min-width: 1440px) {
	  width: 60px;
	  height: 60px;
	  border: 3px solid #8BAA36;
  }
`;
export const ScrollToTop = styled(AiOutlineArrowUp)` {
    color: ${p => p.theme.colors.colorAccent};
  	width: 20px;
	height: 20px;
    @media screen and (min-width: 768px) {
		width: 30px;
	    height: 30px;
  }

}`;
