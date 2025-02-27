import React from 'react';
import { Country } from '../../types/country';
import { SearchIconSVG } from '../SVG/Icons/SearchIconSVG';
import { ButtonComponent } from '../Button/Button';

interface SearchFieldProps {
    search: string;
    searchError: boolean;
    searchedCountries: Country[];
    filteredByContinent: Country[];
    continent: string;
    placeholder?: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchClear: () => void;
}

const SearchField: React.FC<SearchFieldProps> = (props: SearchFieldProps) => {

    const {
        search,
        searchError,
        searchedCountries,
        filteredByContinent,
        continent,
        onSearchChange,
        onSearchClear,
        placeholder = "Start Typing to Search"
    } = props;

    const searchSummary = `${searchedCountries.length} Results, (showing ${filteredByContinent.length}${continent !== '' ? ' in '+continent : ''})`;

    return (
        <section className="flex items-center flex-col md:flex-row">
            <label htmlFor="country-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-8">
                    <SearchIconSVG size={4} primaryColor="text-gray-400"/>
                </div>
                <div className="absolute inset-y-0 end-8 sm:end-10 flex items-center ps-3 w-8">
                    <ButtonComponent
                        colorTheme="skeleton"
                        onClick={onSearchClear}
                        label="Clear"
                        borderRounded="sm"
                    />
                </div>
                <input
                    type="text"
                    id="country-search"
                    placeholder={placeholder}
                    value={search}
                    onChange={onSearchChange}
                    className="input-base sm:w-72 py-2 sm:py-3 ps-10 pr-8"
                />
                {searchError && (
                    <p className="p-3 absolute z-30 bg-gray-700 text-white rounded text-sm mt-2 top-15 transition-opacity">Only letters, dashes (-) and spaces are valid</p>
                )}
            </div>
            {searchedCountries.length > 0 && (
                <p className="ml-1 md:ml-4 py-2 mt-0 sm:mt-1 md:mt-0 sm:py-0 self-start md:self-center">{searchSummary}</p>
            )}
        </section>
    );
};

export { SearchField };