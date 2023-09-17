import {render, screen } from '@testing-library/react';
import {describe, expect} from 'vitest';

import '@testing-library/jest-dom'

import Button from './Button';

// const onClick = jest.fn();

describe('Button component', () => {
  it('renders Button component', () => {
    const title = "Some text";
    render(<Button>{title}</Button>)
    const button = screen.getByText(title);

    expect(button).toBeInTheDocument();
  });

})