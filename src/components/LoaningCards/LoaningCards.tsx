import React from 'react';
import LoaningCard from './LoaningCard/LoaningCard';

const cards = [
  {
    applicationId: 1,
    requestedAmount: 200000,
    totalAmount: 200000,
    term: 24,
    monthlyPayment: 9697 ,
    rate: 15,
    isInsuranceEnabled: false,
    isSalaryClient: false
  },
  {
    applicationId: 2,
    requestedAmount: 200000,
    totalAmount: 200000,
    term: 24,
    monthlyPayment: 9788 ,
    rate: 11,
    isInsuranceEnabled: true,
    isSalaryClient: false
  },
  {
    applicationId: 3,
    requestedAmount: 200000,
    totalAmount: 200000,
    term: 24,
    monthlyPayment: 9603 ,
    rate: 14,
    isInsuranceEnabled: false,
    isSalaryClient: true
  },
  {
    applicationId: 4,
    requestedAmount: 200000,
    totalAmount: 200000,
    term: 24,
    monthlyPayment: 9690,
    rate: 10,
    isInsuranceEnabled: true,
    isSalaryClient: true
  },
]

const LoaningCards = () => {
  return (
    <div className="wrapper">
      <section className="loaning-blocks-cards">
        {cards.map((card) => (
          <LoaningCard
            key={card.applicationId}
            card={card}
          />
        ))}
      </section>
    </div>
  );
};

export default LoaningCards;