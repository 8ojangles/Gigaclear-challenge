import React, { useState } from 'react';
import { Country } from './types/country';
import { useFetchData } from './hooks/useFetchData/useFetchData';
import { useSearchFilter } from './hooks/useSearchFilter/useSearchFilter';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { LoadingErrorMessage } from './components/LoadingErrorMessage/LoadingErrorMessage';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardGrid } from './components/CardGrid/CardGrid';
import { Modal } from './components/Modal/Modal';

const Countries: React.FC = () => {
    const { loading, error, countries } = useFetchData();
    const {
        search,
        searchError,
        continent,
        searchedCountries,
        filteredByContinent,
        uniqueContinents,
        onSearchChange,
        onSearchClear,
        onFilterChange,
    } = useSearchFilter(countries);

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    const onCardClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const onCloseModal = () => {
        setSelectedCountry(null);
    }

    return (
        <>
            <div className="flex h-screen flex-col">
                <Header
                    title="Country Finder"
                >
                    <SearchBar
                        search={search}
                        searchPlaceholder="Search by country name"
                        searchError={searchError}
                        onSearchChange={onSearchChange}
                        onSearchClear={onSearchClear}
                        continent={continent}
                        uniqueContinents={uniqueContinents}
                        onFilterChange={onFilterChange}
                        searchedCountries={searchedCountries}
                        filteredByContinent={filteredByContinent}
                    />
                </Header>
                <main className="bg-slate-100 flex-1 relative">
                    <div className="container-constrained flex-1 flex">
                        {loading && (
                            <LoadingSpinner size={20} zPosition="z20" />
                        )}
                        {error && (
                            <LoadingErrorMessage />
                        )}
                        {countries.length > 0 && (
                            <CardGrid
                                results={filteredByContinent}
                                onCardClick={onCardClick}
                            />
                        )}
                    </div>
                </main> 
            </div>
            <Modal
                selected={selectedCountry}
                onClose={onCloseModal}
            />
        </>
    );
};

export { Countries };