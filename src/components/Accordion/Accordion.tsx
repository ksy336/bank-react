import React from 'react';

const Accordion = () => {
  return (
    <div className="wrapper">
      <section className="accordion-container">
        <div className="accordion-item">About card</div>
        <div className="accordion-item">Rates and conditions</div>
        <div className="accordion-item">Cashback</div>
        <div className="accordion-item">FAQ</div>
      </section>
    </div>
  );
};

export default Accordion;