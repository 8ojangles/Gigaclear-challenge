import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from './API/queries';
import Modal from './components/Modal';
import { Country } from './types/country';
import Gallery from './components/Gallery';
import LoadingSpinner from './components/LoadingSpinner';
  
const Countries: React.FC = () => {
    const { loading: loadingCountries, error: errorCountries, data: dataCountries } = useQuery(GET_COUNTRIES);
    const { loading: loadingContinents, error: errorContinents, data: dataContinents } = useQuery(GET_CONTINENTS);

    const [search, setSearch] = useState('');
    const [continent, setContinent] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    // if (loadingCountries || loadingContinents) return <p>Loading...</p>;
    if (errorCountries || errorContinents) return <p>Error :({errorCountries?.message || errorContinents?.message})</p>;

    const filteredCountries = !loadingCountries && dataCountries.countries.filter((country: any) => {
    return (
        country.name.toLowerCase().includes(search.toLowerCase()) &&
        (continent === '' || country.continent.name === continent)
    );
    });

    const onSearchChangeHandler = (e: { target: { value: React.SetStateAction<string>; }; }): void => {
        setSearch(e.target.value);
    }

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
                <div className="container bg-slate-200 border-b border-slate-300 py-4">
                    <div className="container mx-auto p-4">
                        <h1 className="text-4xl font-bold mb-4">Country Finder</h1>
                        <section className="mb-4 flex justify-between">
                            <input
                                type="text"
                                placeholder="Search by country name"
                                value={search}
                                onChange={onSearchChangeHandler}
                                className="border p-2 mr-2"
                            />
                            <select
                                value={continent}
                                onChange={onFilterChangeHandler}
                                className="border p-2"
                            >
                                <option value="">All Continents</option>
                                {!loadingContinents && dataContinents.continents.map((cont: any) => (
                                <option key={cont.code} value={cont.name}>
                                    {cont.name}
                                </option>
                                ))}
                            </select>
                        </section>
                    </div>
                </div>
                <div className="container bg-slate-100 flex-1 flex">
                    {(loadingCountries || loadingContinents) ? (
                        <LoadingSpinner size={20} />
                    ) : (
                        <div className="container mx-auto p-4">
                            <Gallery
                                countries={filteredCountries}
                                onCardClick={onCardClick}
                            />
                        </div>
                    )}
                </div>
            </div>
            <Modal
                selectedCountry={selectedCountry}
                onClose={onCloseModal}
            />
        </>
    );
};

export default Countries;