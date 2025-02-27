import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

jest.mock('../SVG/images/GigaclearLogo', () => () => <div data-testid="gigaclear-logo" />);

describe('Header Component', () => {
  it('renders the header with the provided title', () => {
    const title = 'Test Title';
    render(<Header title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the Gigaclear logo', () => {
    render(<Header title="Test Title" />);

    expect(screen.getByTestId('gigaclear-logo')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    const title = 'Test Title';
    const children = <div data-testid="child">Child Content</div>;
    render(<Header title={title}>{children}</Header>);

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('does not render children when not provided', () => {
    const title = 'Test Title';
    render(<Header title={title} />);

    expect(screen.queryByTestId('child')).not.toBeInTheDocument();
  });
});