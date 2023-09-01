import React, { ChangeEvent } from 'react';

export type SelectType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className: string;
  defaultValue: string;
}

const Select = ({onChange, defaultValue, label, className}: SelectType) => {
  return (
    <div className="form-block">
      <div className="label-block">
        <label htmlFor={label}>{label}</label>
      </div>
      <select
        className={className}
        defaultValue={defaultValue}>
        <option onChange={onChange}>6 months</option>
        <option onChange={onChange}>12 months</option>
        <option onChange={onChange}>18 months</option>
        <option onChange={onChange}>24 months</option>
      </select>
    </div>
  )
}
export default Select;