import { render, screen } from '@testing-library/react';
import { PriceTag } from '../../components/PriceTag/PriceTag';

describe('PriceTag Component', () => {
  test('renders the price with default currency', () => {
    render(<PriceTag price={10.5} />);

    expect(screen.getByText('10.50')).toBeInTheDocument();
    expect(screen.getByText('€')).toBeInTheDocument();
  });

  test('renders the price with custom currency', () => {
    render(<PriceTag price={20.75} currency='$' />);

    expect(screen.getByText('20.75')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  test('renders the price with whole number', () => {
    render(<PriceTag price={100} />);

    expect(screen.getByText('100.00')).toBeInTheDocument();
    expect(screen.getByText('€')).toBeInTheDocument();
  });
});
