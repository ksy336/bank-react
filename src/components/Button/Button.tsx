import React from 'react';
import { ButtonType } from './Button-types';
import "./Button.scss";

const Button = (props: ButtonType) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || 'button'}
      // className={`btn btn__online-bank ${props.disabled && 'disabled'}`}
      className={`${props.className} ${props.disabled && 'disabled'}`}
    >
      {props.children}
    </button>
  );
};

export default Button;