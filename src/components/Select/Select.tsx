import React, { ChangeEvent } from 'react';

export type SelectType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className: string;
  defaultValue?: string;
  error?: any;
  options: string[];
}

const Select = ({onChange, defaultValue, label, className, error, options}: SelectType) => {
  return (
    <div className="form-block">
      <div className="label-block">
        <label htmlFor={label}>{label}</label>
      </div>
      <select
        className={className}
        defaultValue={defaultValue}>
        {options.map((value) => (
          <option onChange={onChange}>{value}</option>
        ))}
      </select>
      {error && <div className="error-description">{error?.message}</div>}
    </div>
  )
}
export default Select;