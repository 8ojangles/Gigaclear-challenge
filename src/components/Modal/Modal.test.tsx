import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';
import { Country } from '../../types/country';

describe('Modal', () => {
    const mockCountry: Country = {
        code: 'US',
        name: 'United States',
        continent: { name: 'North America' },
        capital: 'Washington, D.C.',
        currency: 'USD',
        languages: [{ name: 'English' }],
        emoji: '🇺🇸'
    };

    const mockOnClose = jest.fn();

    it('should not render when selectedCountry is null', () => {
        const { container } = render(<Modal selected={null} onClose={mockOnClose} />);
        expect(container.firstChild).toBeNull();
    });

    it('should render country details when selected is provided', () => {
        render(<Modal selected={mockCountry} onClose={mockOnClose} />);
        expect(screen.getByText('Continent:')).toBeInTheDocument();
        expect(screen.getByText('North America')).toBeInTheDocument();
        expect(screen.getByText('Capital:')).toBeInTheDocument();
        expect(screen.getByText('Washington, D.C.')).toBeInTheDocument();
        expect(screen.getByText('Currency:')).toBeInTheDocument();
        expect(screen.getByText('USD')).toBeInTheDocument();
        expect(screen.getByText('Languages:')).toBeInTheDocument();
        expect(screen.getByText('English')).toBeInTheDocument();
    });

    it('should call onClose when the close button is clicked', () => {
        render(<Modal selected={mockCountry} onClose={mockOnClose} />);
        const button = screen.getByText((content, element) => element?.tagName.toLowerCase() === 'button');
        fireEvent.click(button);
        expect(mockOnClose).toHaveBeenCalled();
    });
});