import React from 'react';
import { BtnMain } from './ButtonMain.styled';

function ReplaceableButton(props) {
  const { label, color, onClick } = props;

  return (
    <BtnMain style={{ color: `${color}` }} onClick={onClick}>
      {label}
    </BtnMain>
  );
}

export default ReplaceableButton;
