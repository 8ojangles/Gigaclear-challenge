import { Country } from '../types/country';
import {
    getCountriesToSorted,
    getSearchedCountries,
    getFilteredByContinent,
    getUniqueContinents,
    mapCountryDetail
} from './countryUtils';

const mockCountries: Country[] = [
    { code: 'US', name: 'United States', continent: { name: 'North America' }, capital: 'Washington, D.C.', currency: 'USD', languages: [{ name: 'English' }], emoji: '🇺🇸' },
    { code: 'CA', name: 'Canada', continent: { name: 'North America' }, capital: 'Ottawa', currency: 'CAD', languages: [{ name: 'English' }, { name: 'French' }], emoji: '🇨🇦' },
    { code: 'FR', name: 'France', continent: { name: 'Europe' }, capital: 'Paris', currency: 'EUR', languages: [{ name: 'French' }], emoji: '🇫🇷' },
];

const mockCountry: Country = {
    code: 'US',
    name: 'United States',
    continent: { name: 'North America' },
    capital: 'Washington, D.C.',
    currency: 'USD',
    languages: [{ name: 'English' }],
    emoji: '🇺🇸'
};

describe('countryUtils', () => {
    it('should sort countries by name', () => {
        const sortedCountries = getCountriesToSorted(mockCountries);
        expect(sortedCountries[0].name).toBe('Canada');
        expect(sortedCountries[1].name).toBe('France');
        expect(sortedCountries[2].name).toBe('United States');
    });

    it('should filter countries by search term', () => {
        const searchedCountries = getSearchedCountries(mockCountries, 'can');
        expect(searchedCountries.length).toBe(1);
        expect(searchedCountries[0].name).toBe('Canada');
    });

    it('should filter countries by continent', () => {
        const filteredCountries = getFilteredByContinent(mockCountries, 'Europe');
        expect(filteredCountries.length).toBe(1);
        expect(filteredCountries[0].name).toBe('France');
    });

    it('should get unique continents', () => {
        const uniqueContinents = getUniqueContinents(mockCountries);
        expect(uniqueContinents.length).toBe(2);
        expect(uniqueContinents).toContain('North America');
        expect(uniqueContinents).toContain('Europe');
    });
});

describe('mapCountryDetail', () => {
    it('should map country details correctly', () => {
        const result = mapCountryDetail(mockCountry);

        expect(result).toEqual({
            capital: 'Washington, D.C.',
            continent: 'North America',
            currency: 'USD',
            languages: 'English',
            code: 'US',
            emoji: '🇺🇸'
        });
    });

    it('should handle multiple languages correctly', () => {
        const multiLangCountry: Country = {
            ...mockCountry,
            languages: [{ name: 'English' }, { name: 'Spanish' }]
        };

        const result = mapCountryDetail(multiLangCountry);

        expect(result.languages).toBe('English, Spanish');
    });

    it('should handle missing optional fields correctly', () => {
        const partialCountry: Country = {
            code: 'US',
            name: 'United States',
            continent: { name: 'North America' },
            capital: '',
            currency: '',
            languages: [],
            emoji: ''
        };

        const result = mapCountryDetail(partialCountry);

        expect(result).toEqual({
            capital: '',
            continent: 'North America',
            currency: '',
            languages: '',
            code: 'US',
            emoji: ''
        });
    });
});