import React from 'react';

export type CurrencyProp = {
  currencies: [];
}

const Currencies = ({ currencies }: CurrencyProp) => {

  const getTuples = () => {
    let tuple = [];
    let result = [];
    for(let i = 0; i < currencies.length; i++) {
      tuple.push(currencies[i]);
      if (tuple.length === 2) {
        result.push(tuple);
        tuple = [];
      }
    }
    return result;
  }

  return (
    <section className="currency__block">
      {getTuples().map(([first, second], index) => (
        <div className="currency-data__exchange" key={index}>
          <span className="currency__name">{first.currency}: <span className="currency__num"/>{Number(first.value).toFixed(2)}</span>
          <span className="currency__name">{second.currency}: <span className="currency__num"/>{Number(second.value).toFixed(2)}</span>
        </div>
      ))}
    </section>

  );
};

export default Currencies;