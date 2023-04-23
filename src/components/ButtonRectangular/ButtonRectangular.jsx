import React from 'react';
import { RectanBtn } from './ButtonRectangular.style';

function RectangularButton(props) {
  const { label, color, onClick } = props;

  return (
    <RectanBtn style={{ color: `${color}` }} onClick={onClick}>
      {label}
    </RectanBtn>
  );
}

export default RectangularButton;
