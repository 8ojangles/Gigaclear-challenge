import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';
import { Country } from './../types/country';

describe('Card', () => {
    const mockCountry: Country = {
        code: 'US',
        name: 'United States',
        continent: { name: 'North America' },
        capital: 'Washington, D.C.',
        currency: 'USD',
        languages: [{ name: 'English' }],
        emoji: '🇺🇸'
    };

    const mockOnCardClick = jest.fn();

    it('should render country details', () => {
        render(<Card country={mockCountry} onCardClick={mockOnCardClick} scrollPosition={{}} />);
        
        expect(screen.getByText('United States')).toBeInTheDocument();
        expect(screen.getByText('North America')).toBeInTheDocument();
    });

    it('should call onCardClick when the card is clicked', () => {
        render(<Card country={mockCountry} onCardClick={mockOnCardClick} scrollPosition={{}} />);
        
        fireEvent.click(screen.getByText('United States'));
        expect(mockOnCardClick).toHaveBeenCalledWith(mockCountry);
    });
});