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
                        btnType="skeleton"
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
                    className="block w-full sm:w-72 py-2 sm:py-3 ps-10 pr-8 text-md text-gray-900 border border-gray-300 rounded-sm  bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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