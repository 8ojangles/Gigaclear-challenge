import React, { Suspense, useState } from 'react';
import { Country } from './types/country';
import { useSearchFilter } from './hooks/useSearchFilter/useSearchFilter';
import { ErrorBoundary } from "react-error-boundary";
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { LoadingErrorMessage } from './components/LoadingErrorMessage/LoadingErrorMessage';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardGrid } from './components/CardGrid/CardGrid';
import { Modal } from './components/Modal/Modal';
import { GET_COUNTRIES } from './API/queries';
import { useSuspenseQuery } from '@apollo/client';

const Countries: React.FC = () => {
    const { data } = useSuspenseQuery<{ countries: Country[] }>(GET_COUNTRIES);
    const searchFilter = useSearchFilter(data.countries);

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
                        searchPlaceholder="Search by country name"
                        filter={searchFilter}
                    />
                </Header>
                <main className="bg-slate-100 flex-1 relative">
                    <div className="container-constrained flex-1 flex">
                    <ErrorBoundary fallback={<LoadingErrorMessage />}>
                        <Suspense fallback={<LoadingSpinner size={20} zPosition="z20" />}>
                            <CardGrid
                                results={searchFilter.filteredByContinent}
                                onCardClick={onCardClick}
                            />
                        </Suspense>
                    </ErrorBoundary>
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