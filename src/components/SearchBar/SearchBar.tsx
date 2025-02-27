import React from 'react';
import { SearchField } from '../SearchField/SearchField';
import { SelectField } from '../SelectField/SelectField';
import { Country } from '../../types/country';

/**
 * @interface SearchBarProps
 * @param {string} search The search term
 * @param {string} searchPlaceholder The search input placeholder text
 * @param {boolean} searchError The search error state
 * @param {function} onSearchChange The search input change handler
 * @param {function} onSearchClear The search input clear handler
 * @param {Country[]} searchedCountries The countries filtered by search term
 * @param {Country[]} filteredByContinent The countries filtered by continent
 * @param {string} continent The selected continent
 * @param {string[]} uniqueContinents The unique continents
 * @param {function} onFilterChange The continent filter change handler
 * @description SearchBarProps interface - defines the props for the SearchBar component
 */
interface SearchBarProps {
    search: string;
    searchPlaceholder?: string;
    searchError: boolean;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchClear: () => void;
    searchedCountries: Country[],
    filteredByContinent: Country[],
    continent: string,
    uniqueContinents: string[],
    onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

/**
 * @component SearchBar
 * @arg {SearchBarProps} props 
 * @returns {JSX.Element} - The Search bar component
 * @description SearchBar component - renders the search bar and select field for country lookup and filtering by continent. Used in conjunction with 'useFetchData' and 'useSearchFilter' hooks.
 * @example <SearchBar search="search" searchError={false} onSearchChange={handleSearchChange} onSearchClear={handleSearchClear} searchedCountries={[]} filteredByContinent={[]} continent="All Continents" uniqueContinents={[]} onFilterChange={handleFilterChange} />
 */
const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {   

    const {
        search,
        searchError,
        onSearchChange,
        onSearchClear,
        searchedCountries,
        filteredByContinent,
        continent,
        uniqueContinents,
        onFilterChange,
        searchPlaceholder
    } = props;

    return (
        <div className="container-constrained px-4 flex justify-between flex-col sm:flex-row">
            <SearchField
                search={search}
                searchError={searchError}
                searchedCountries={searchedCountries}
                filteredByContinent={filteredByContinent}
                continent={continent}
                onSearchChange={onSearchChange}
                onSearchClear={onSearchClear}
                placeholder={searchPlaceholder}
            />
            <SelectField
                initialOption='All Continents'
                selected={continent}
                selectOptions={uniqueContinents}
                onFilterChange={onFilterChange}
            />
        </div>
    );
};

export { SearchBar };