import React from 'react';
import { SearchField } from '../SearchField/SearchField';
import { SelectField } from '../SelectField/SelectField';
import { SearchFilterResult } from '../../hooks/useSearchFilter/useSearchFilter';

/**
 * @interface SearchBarProps
 * @param {string} searchPlaceholder The search input placeholder text
 * @param {SearchFilterResult} filter The search term
 * @description SearchBarProps interface - defines the props for the SearchBar component
 */
interface SearchBarProps {
    searchPlaceholder?: string;
    filter: SearchFilterResult;
}

/**
 * @component SearchBar
 * @arg {SearchBarProps} props 
 * @returns {JSX.Element} - The Search bar component
 * @description SearchBar component - renders the search bar and select field for country lookup and filtering by continent. Used in conjunction with 'useFetchData' and 'useSearchFilter' hooks.
 * @example <SearchBar searchPlaceholder="search" filter={filterOptions} />
 */
const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {   

    const {
        filter, searchPlaceholder
    } = props;

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
    } = filter;

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