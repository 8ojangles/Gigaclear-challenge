import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardGrid } from './CardGrid';
import { Country } from './../../types/country';

describe('CardGrid', () => {
    const mockCountries: Country[] = [
        { code: 'US', name: 'United States', continent: { name: 'North America' }, capital: 'Washington, D.C.', currency: 'USD', languages: [{ name: 'English' }], emoji: '🇺🇸' },
        { code: 'CA', name: 'Canada', continent: { name: 'North America' }, capital: 'Ottawa', currency: 'CAD', languages: [{ name: 'English' }, { name: 'French' }], emoji: '🇨🇦' },
    ];

    const mockOnCardClick = jest.fn();

    it('should render "No results found" message when countries array is empty', () => {
        render(<CardGrid results={[]} onCardClick={mockOnCardClick} />);
        expect(screen.getByText('No results found. Try a different name.')).toBeInTheDocument();
    });

    it('should render cards when countries are provided', () => {
        render(<CardGrid results={mockCountries} onCardClick={mockOnCardClick} />);
        
        mockCountries.forEach((country) => {
            expect(screen.getByText(country.name)).toBeInTheDocument();
        });
    });
});