import { Country } from './../types/country';

export const getCountriesToSorted = (countries: Country[]): Country[] => {
    return countries.toSorted((a: Country, b: Country) => a.name.localeCompare(b.name));
};

export const getSearchedCountries = (countries: Country[], search: string): Country[] => {
    return countries.filter((country: Country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
    });
};

export const getFilteredByContinent = (countries: Country[], continent: string): Country[] => {
    return countries.filter((country: Country) => {
        return continent === '' || country.continent.name === continent;
    });
};

export const getUniqueContinents = (countries: Country[]): string[] => {
    return Array.from(new Set(countries.map((country: Country) => country.continent.name)));
};