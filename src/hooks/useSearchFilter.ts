import { useState } from 'react';
import { Country } from '../types/country';
import { getCountriesToSorted, getSearchedCountries, getFilteredByContinent, getUniqueContinents } from '../utilities/countryUtils';
import { isValidCountryInput } from '../utilities/text-utilities';

interface SearchFilterResult {
    search: string;
    searchError: boolean;
    continent: string;
    searchedCountries: Country[];
    filteredByContinent: Country[];
    uniqueContinents: string[];
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchClear: () => void;
    onSearchBlur: () => void;
    onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const useSearchFilter = (countries: Country[]): SearchFilterResult => {
    const [search, setSearch] = useState<string>('');
    const [searchError, setSearchError] = useState<boolean>(false);
    const [continent, setContinent] = useState<string>('');

    const countriesSortedInitial = getCountriesToSorted(countries);
    const searchedCountries = getSearchedCountries(countriesSortedInitial, search);
    const filteredByContinent = getFilteredByContinent(searchedCountries, continent);
    const uniqueContinents = getUniqueContinents(searchedCountries);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const val = e.target.value as string;
        if (isValidCountryInput(val) || val === '') {
            if (searchError) {
                setSearchError(false);
            }
            setSearch(val);
        } else {
            setSearchError(true);
        }
    };

    const onSearchClear = (): void => {
        setSearch('');
    };

    const onSearchBlur = (): void => {
        if (searchError) {
            setSearchError(false);
        }
    };

    const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setContinent(e.target.value);
    };

    return {
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
    };
};

export { useSearchFilter };