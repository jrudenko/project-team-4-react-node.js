import { LogoBox, FooterTitle, Logo } from './Footer.styled';
import { ReactComponent as SvgLogo } from '../../images/SVG/Logo/logoInv.svg';

export const LogoFooter = () => {
  return (
    <>
      <LogoBox>
        <Logo>
         <SvgLogo/>
        </Logo>
        <FooterTitle>So Yummy</FooterTitle>
      </LogoBox>

    </>
  )
}
