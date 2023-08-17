import React from 'react';

export type CurrencyProp = {
  item: string;
}
const CurrencyItem = ({ item }: CurrencyProp) => {
  console.log(item)
  return (
    <section className="currency__block">
      <div className="currency-data__exchange">
        <span className="currency__name">USD: <span className="currency__num"/>{Number(item).toFixed(2)}</span>
        <span className="currency__name">EUR:  <span className="currency__num"/>{Number(item).toFixed(2)}</span>
      </div>
      <div className="currency-data__exchange">
        <span className="currency__name">SGD:  <span className="currency__num"/>{Number(item).toFixed(2)}</span>
        <span className="currency__name">MYR: <span className="currency__num"/>{Number(item).toFixed(2)}</span>
      </div>
      <div className="currency-data__exchange">
        <span className="currency__name">AUD:  <span className="currency__num"/>{Number(item).toFixed(2)}</span>
        <span className="currency__name">JPY: <span className="currency__num"/>{Number(item).toFixed(2)}</span>
      </div>
    </section>

  );
};

export default CurrencyItem;