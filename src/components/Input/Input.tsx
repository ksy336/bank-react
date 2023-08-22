import React, { ChangeEvent } from 'react';
import star from '../../assets/icons/_.svg';

export type InputType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // type: string;
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  label: string;
  defaultValue: string | number;
  className: string;
  placeholder: string;
}

const Input = ({onChange, type, defaultValue, label, className, placeholder}) => {
  return (
    <div className="form-block">
      <div className="label-block">
        <label htmlFor={label}>{label}</label>
        <span><img src={star} alt="star" /></span>
      </div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        // value={value}
        />
    </div>
  )
}
export default Input;