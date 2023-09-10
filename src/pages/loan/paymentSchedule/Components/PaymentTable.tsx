import React from 'react';


const PaymentTable = ({item}) => {
  return (
      <div className="list-container-payment">
        <ul className="number-item for-all-items">
          <li>{item?.number}</li>
        </ul>
        <ul className="date-item for-all-items">
          <li>{item?.date.toLocaleDateString()}</li>
        </ul>
        <ul className="date-item for-all-items">
          <li>{item?.totalPayment}</li>
        </ul>
        <ul className="date-item for-all-items">
          <li>{item?.interestPayment}</li>
        </ul>
        <ul className="date-item for-all-items">
          <li>{item?.debtPayment}</li>
        </ul>
        <ul className="date-item for-all-items">
          <li>{item?.remainingDebt}</li>
        </ul>
      </div>
  );
};

export default PaymentTable;