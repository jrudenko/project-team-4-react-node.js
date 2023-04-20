import { LogoLink } from './Logo.styled';
import { ReactComponent as LogoSvg } from '../../images/SVG/Logo/logo.svg';

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoSvg />
    </LogoLink>
  );
}

export default Logo;

