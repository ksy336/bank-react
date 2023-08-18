import React from 'react';
export type InputType = {
  onChange: () => void;
  type: string;
  className: string;
  placeholder: string;
  value?: string;
}

const Input = (props: InputType) => {
  return (
    <input
      onChange={props.onChange}
      type={props.type || 'text'}
      className={props.className}
      placeholder={props.placeholder}
      // value={props.value}
      />
  )
};

export default Input;