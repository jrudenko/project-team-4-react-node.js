import { ButtonStyled, LinkStyled } from './Button.styled';

export const Button = ({
  type,
  onClick,
  onChange,
  to,
  children,
  look,
  width,
  widthTablet,
  widthDesktop,
  heigth,
  heigthTablet,
  heigthDesktop,
  fontSize,
  fontSizeTablet,
  fontSizeDesktop,
  lineHeight,
  lineHeightTablet,
  lineHeightDesktop,
  state,
}) => {
  if (to) {
    return (
      <LinkStyled
        state={state}
        to={to}
        type={type}
        width={width}
        width_tablet={widthTablet}
        width_desktop={widthDesktop}
        height={heigth}
        heigth_tablet={heigthTablet}
        heigth_desktop={heigthDesktop}
        look={look}
        fsize={fontSize}
        fsize_tablet={fontSizeTablet}
        fsize_desktop={fontSizeDesktop}
        lineheight={lineHeight}
        lineheight_tablet={lineHeightTablet}
        lineheight_desktop={lineHeightDesktop}
      >
        {children}
      </LinkStyled>
    );
  }
  return (
    <ButtonStyled
      type={type}
      onChange={onChange}
      onClick={onClick}
      width={width}
      width_tablet={widthTablet}
      width_desktop={widthDesktop}
      height={heigth}
      heigth_tablet={heigthTablet}
      heigth_desktop={heigthDesktop}
      look={look}
      fsize={fontSize}
      fsize_tablet={fontSizeTablet}
      fsize_desktop={fontSizeDesktop}
      lineheight={lineHeight}
      lineheight_tablet={lineHeightTablet}
      lineheight_desktop={lineHeightDesktop}
    >
      {children}
    </ButtonStyled>
  );
};
