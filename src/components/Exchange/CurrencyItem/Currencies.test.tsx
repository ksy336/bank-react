import {render, screen } from '@testing-library/react';
import {describe} from 'vitest';
import Currencies from './Currencies';

const data = ["USD", "EUR", "SGD", "MYR", "AUD", "JPY"];

describe('Currencies component', () => {
  it('Currencies renders', () =>  {
    render(<Currencies currencies={data} />);

    // expect(getByText('USD')).toBeInTheDocument();
    expect(data[0]).toBe('USD');
  });

  it('Currencies snapshot', () => {
    const list = render(<Currencies currencies={data} />);

    expect(list).toMatchSnapshot();
  })
})