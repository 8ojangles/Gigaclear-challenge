import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from './API/queries';
import Modal from './components/Modal';
import { Country } from './types/country';
import CardGrid from './components/CardGrid';
import LoadingSpinner from './components/LoadingSpinner';
import SearchIconSVG from './components/SearchIconSVG';
import { isValidCountryInput } from './utilities/text-utilities';
import GigaclearLogo from './components/GigaclearLogo';

const Countries: React.FC = () => {
    const { loading: loadingCountries, error: errorCountries, data: dataCountries } = useQuery(GET_COUNTRIES);
    const { loading: loadingContinents, error: errorContinents, data: dataContinents } = useQuery(GET_CONTINENTS);

    const [search, setSearch] = useState('');
    const [searchError, setSearchError] = useState<boolean>(false);
    const [continent, setContinent] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    if (errorCountries || errorContinents) return <p>Error :({errorCountries?.message || errorContinents?.message})</p>;

    const countriesSortedInitial = !loadingCountries && dataCountries.countries.toSorted((a: Country, b: Country) => a.name.localeCompare(b.name));

    const searchedCountries = !loadingCountries && countriesSortedInitial.filter((country: any) => {
        return (
            country.name.toLowerCase().includes(search.toLowerCase())
        );
    });

    const filteredByContinent = !loadingCountries && searchedCountries.filter((country: any) => {
        return continent === '' || country.continent.name === continent;
    });
    
    const uniqueContinents = searchedCountries
        ? Array.from(new Set(searchedCountries.map((country: any) => country.continent.name)))
        : [];
    
    const onSearchChangeHandler = (e: { target: { value: React.SetStateAction<string>; }; }): void => {
        const val = e.target.value as string;
        if (isValidCountryInput(val) || val === '') {
            if (searchError) {
                setSearchError(false);
            }
            setSearch(val);
        } else {
            setSearchError(true);
        };
    }

    const onSearchClear = () => {
        setSearch('');
    }

    const onSearchBlurHandler = (): void => {
        if (searchError) {
            setSearchError(false);
        }
    };

    const onFilterChangeHandler = (e: { target: { value: React.SetStateAction<string>; }; }): void => {
        setContinent(e.target.value);
    }

    const onCardClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const onCloseModal = () => {
        setSelectedCountry(null);
    }

    return (
        <>
            <div className="flex h-screen flex-col">
                <header className="bg-slate-200 border-b border-slate-400 py-4 shadow-md z-30 fixed top-0 w-full">
                    <div className="container mx-auto max-w-screen-xl px-4 my-2 flex items-center">
                        <div className="w-36 md:w-56 h-8 md:h-12">
                            <GigaclearLogo />
                        </div>
                        <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Country Finder</h1>
                    </div>
                    <div className="container mx-auto max-w-screen-xl px-4 flex justify-between flex-col sm:flex-row">
                        <section className="flex items-center flex-col md:flex-row">
                            <label htmlFor="country-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative w-full sm:w-auto">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-8">
                                    <SearchIconSVG size={4} primaryColor="text-gray-400"/>
                                </div>
                                <div className="absolute inset-y-0 end-5 sm:end-7 flex items-center ps-3 w-8">
                                    <button
                                        type="button"
                                        title="Clear Search"
                                        onClick={onSearchClear}
                                        className="bg-white border border-gray-400 rounded-sm p-1 sm:p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">Clear Search</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    id="country-search"
                                    placeholder="Search by country name"
                                    value={search}
                                    onChange={onSearchChangeHandler}
                                    onBlur={onSearchBlurHandler}
                                    className="block w-full sm:w-72 py-2 sm:py-3 ps-10 pr-12 text-md text-gray-900 border border-gray-300 rounded-sm  bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {searchError && (
                                    <p className="p-3 absolute z-30 bg-gray-700 text-white rounded text-sm mt-2 top-15 transition-opacity">Only letters, dashes (-) and spaces are valid</p>
                                )}
                            </div>
                            {searchedCountries.length > 0 && (
                                <p className="ml-1 md:ml-4 py-2 mt-0 sm:mt-1 md:mt-0 sm:py-0 self-start md:self-center">{`${searchedCountries.length} Results, (showing ${filteredByContinent.length}${continent !== '' ? ' in '+continent : ''})`}</p>
                            )}
                        </section>
                        <section>
                            <select
                                data-testid="filter-continents"
                                id="filter-continents"
                                value={continent}
                                onChange={onFilterChangeHandler}
                                className="block w-full sm:w-64 md:w-64 px-4 py-2 sm:py-3 text-md text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >   
                                <option value="">All Continents</option>
                                {uniqueContinents.map((cont: any) => (
                                    <option key={cont} value={cont}>{cont}</option>
                                ))}
                            </select>
                        </section>
                    </div>
                </header>
                <main className="bg-slate-100 flex-1 relative">
                    <div className="container mx-auto max-w-screen-xl flex-1 flex">
                        {(loadingCountries || loadingContinents) ? (
                            <LoadingSpinner size={20} zLayer={20} />
                        ) : (
                            <>
                                {(errorCountries || errorContinents) ? (
                                    <div className="flex items-center justify-center h-64">
                                        <p className="text-2xl font-bold text-gray-400 text-center">There was a problem getting the data. Refresh the page to try again (F5) or come back later.</p>
                                    </div>
                                ) : (
                                    <div className="container mx-auto pt-56 sm:pt-44 px-4 pb-4">
                                        <CardGrid
                                            countries={filteredByContinent}
                                            onCardClick={onCardClick}
                                        />
                                    </div>
                                )}
                            </>
                            
                        )}
                    </div>
                </main> 
            </div>
            <Modal
                selectedCountry={selectedCountry}
                onClose={onCloseModal}
            />
        </>
    );
};

export default Countries;