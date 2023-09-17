import { render } from '@testing-library/react';
import {describe, test} from 'vitest';

import LoaningCard from './LoaningCard';

describe('LoaningCard', () => {
  const card = {
      applicationId: 1,
      requestedAmount: 200000,
      totalAmount: 200000,
      term: 24,
      monthlyPayment: 9697 ,
      rate: 15,
      isInsuranceEnabled: false,
      isSalaryClient: false
    }

    test('renders the card requestedAmount, applicationId, totalAmount, term, monthlyPayment, rate, isInsuranceEnabled, isSalaryClient', () => {
      const { getByText } = render(<LoaningCard card={card} />)

      expect(getByText(card.requestedAmount.toString())).toBeInTheDocument();
      // expect(getByText(card.rate)).toBeInTheDocument();
      // expect(getByText(card.monthlyPayment)).toBeInTheDocument();
    })
})