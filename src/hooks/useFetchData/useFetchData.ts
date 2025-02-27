import { useSuspenseQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from '../../API/queries';
import { Country } from '../../types/country';
import { Continent } from '../../types/continent';

interface FetchDataResult {
    countries: Country[];
    continents: Continent[];
}

const useFetchData = (): FetchDataResult => {
    const { data: dataCountries } = useSuspenseQuery<{ countries: Country[] }>(GET_COUNTRIES);
    const { data: dataContinents } = useSuspenseQuery<{ continents: Continent[] }>(GET_CONTINENTS);
    console.log(dataCountries);
    console.log(dataContinents);
    const countries = dataCountries ? dataCountries.countries : [];
    const continents = dataContinents ? dataContinents.continents : [];

    return { countries, continents };
};

export { useFetchData };