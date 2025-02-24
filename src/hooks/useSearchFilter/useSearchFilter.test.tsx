import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useSearchFilter } from './useSearchFilter';
import { Country } from '../../types/country';

const mockCountries: Country[] = [
    { code: 'US', name: 'United States', continent: { name: 'North America' }, capital: 'Washington, D.C.', currency: 'USD', languages: [{ name: 'English' }], emoji: '🇺🇸' },
    { code: 'CA', name: 'Canada', continent: { name: 'North America' }, capital: 'Ottawa', currency: 'CAD', languages: [{ name: 'English' }, { name: 'French' }], emoji: '🇨🇦' },
    { code: 'FR', name: 'France', continent: { name: 'Europe' }, capital: 'Paris', currency: 'EUR', languages: [{ name: 'French' }], emoji: '🇫🇷' },
];

const TestComponent: React.FC<{ countries: Country[] }> = ({ countries }) => {
    const {
        search,
        searchError,
        continent,
        searchedCountries,
        filteredByContinent,
        uniqueContinents,
        onSearchChange,
        onSearchClear,
        onSearchBlur,
        onFilterChange,
    } = useSearchFilter(countries);

    return (
        <div>
            <input
                data-testid="search-input"
                value={search}
                onChange={onSearchChange}
                onBlur={onSearchBlur}
            />
            <button data-testid="clear-button" onClick={onSearchClear}>Clear</button>
            <select data-testid="filter-select" value={continent} onChange={onFilterChange}>
                <option value="">All Continents</option>
                {uniqueContinents.map(cont => (
                    <option key={cont} value={cont}>{cont}</option>
                ))}
            </select>
            <div data-testid="search-error">{searchError && 'Invalid input'}</div>
            <div data-testid="searched-countries">{searchedCountries.map(country => country.name).join(', ')}</div>
            <div data-testid="filtered-countries">{filteredByContinent.map(country => country.name).join(', ')}</div>
        </div>
    );
};

describe('useSearchFilter', () => {
    it('should filter countries by search term', () => {
        render(<TestComponent countries={mockCountries} />);

        fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'can' } });

        expect(screen.getByTestId('searched-countries')).toHaveTextContent('Canada');
        expect(screen.getByTestId('filtered-countries')).toHaveTextContent('Canada');
    });

    it('should filter countries by continent', () => {
        render(<TestComponent countries={mockCountries} />);

        fireEvent.change(screen.getByTestId('filter-select'), { target: { value: 'Europe' } });

        expect(screen.getByTestId('filtered-countries')).toHaveTextContent('France');
    });

    it('should clear search input', () => {
        render(<TestComponent countries={mockCountries} />);

        fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'can' } });
        fireEvent.click(screen.getByTestId('clear-button'));

        expect(screen.getByTestId('search-input')).toHaveValue('');
        expect(screen.getByTestId('searched-countries')).toHaveTextContent('Canada, France, United States');
    });

    it('should show search error for invalid input', () => {
        render(<TestComponent countries={mockCountries} />);

        fireEvent.change(screen.getByTestId('search-input'), { target: { value: '123' } });

        expect(screen.getByTestId('search-error')).toHaveTextContent('Invalid input');
    });
});