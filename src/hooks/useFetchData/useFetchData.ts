import { useQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from '../../API/queries';
import { Country } from '../../types/country';
import { Continent } from '../../types/continent';

interface FetchDataResult {
    loading: boolean;
    error: boolean;
    countries: Country[];
    continents: Continent[];
}

const useFetchData = (): FetchDataResult => {
    const { loading: loadingCountries, error: errorCountries, data: dataCountries } = useQuery(GET_COUNTRIES);
    const { loading: loadingContinents, error: errorContinents, data: dataContinents } = useQuery(GET_CONTINENTS);

    const loading = loadingCountries || loadingContinents;
    const error = !!errorCountries || !!errorContinents;
    const countries = dataCountries ? dataCountries.countries : [];
    const continents = dataContinents ? dataContinents.continents : [];

    return { loading, error, countries, continents };
};

export { useFetchData };