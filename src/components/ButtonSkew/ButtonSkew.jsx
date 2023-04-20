import  {ButSkewStyle}  from './buttonSkew.styled';

const ButtonSkew = ({ type, fn, text}) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <ButSkewStyle
      type={type}
      onClick={onClick}
    >
      {text}
    </ButSkewStyle>
  );
};

export default ButtonSkew