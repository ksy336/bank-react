import React, { ChangeEvent } from 'react';
import star from '../../assets/icons/_.svg';

export type InputType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  label: string;
  className: string;
  placeholder: string;
  name: string;
  error: any;
}

const Input = ({onChange, type, label, className, placeholder, name, error}: InputType) => {
  return (
    <div className="form-block">
      <div className="label-block">
        <label htmlFor={label}>{label}</label>
        <span><img src={star} alt="star" /></span>
      </div>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        />
      {error && <div className="error-description">{error?.message}</div>}
    </div>
  )
}
export default Input;