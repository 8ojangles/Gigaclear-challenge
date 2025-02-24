import React from 'react';
import { SearchField } from '../SearchField/SearchField';
import { SelectField } from '../SelectField/SelectField';
import { Country } from '../../types/country';

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
        <div className="container mx-auto max-w-screen-xl px-4 flex justify-between flex-col sm:flex-row">
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