import React from 'react';

export type BlockProp = {
  icon: string;
  text: string;
  description: string;
  className: string;
}
const Block = ({className, icon, text, description}: BlockProp) => {
  return (
    <div className={className}>
      <img src={icon} alt="icon" />
      <div className="text-loaning">{text}</div>
      <div className="text-description">{description}</div>
    </div>
  );
};

export default Block;