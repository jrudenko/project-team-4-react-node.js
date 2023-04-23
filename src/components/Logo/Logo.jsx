import { LogoLink } from './Logo.styled';
import { ReactComponent as LogoSvg } from '../../images/SVG/Logo/logo.svg';

const Logo = () => {
  return (
    <LogoLink to="/main" >
      <LogoSvg />
    </LogoLink>
  );
};

export default Logo;

// import { useMediaQuery } from 'react-responsive';
// import { ReactComponent as LogoSvg } from '../../images/SVG/Logo/logo.svg';
// import { LogoLink } from './Logo.styled';

// const Logo = (p) => {
//     const isTabletOrDesktop = useMediaQuery({ minWidth: 769 });
//     const isMobile = useMediaQuery({ maxWidth: 767 });

//     return (
//       <LogoLink to="/" mr={p.mr}>
//             {isTabletOrDesktop && <LogoSvg />}
//             {isMobile && <LogoSvg width={40} height={40} />}
//         </LogoLink>
//     );
// };

// export default Logo;
