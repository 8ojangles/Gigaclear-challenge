import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_COUNTRIES, GET_CONTINENTS } from '../API/queries';
import { useFetchData } from './useFetchData';

const mockCountries = [
    {
        code: 'US',
        name: 'United States',
        continent: { name: 'North America' },
        capital: 'Washington, D.C.',
        currency: 'USD',
        languages: [{ name: 'English' }],
        emoji: '🇺🇸'
    },
    {
        code: 'CA',
        name: 'Canada',
        continent: { name: 'North America' },
        capital: 'Ottawa',
        currency: 'CAD',
        languages: [{ name: 'English' }, { name: 'French' }],
        emoji: '🇨🇦'
    }
];

const mockContinents = [
    {
        code: 'NA',
        name: 'North America'
    },
    {
        code: 'EU',
        name: 'Europe'
    }
];

const mocks = [
    {
        request: {
            query: GET_COUNTRIES,
        },
        result: {
            data: {
                countries: mockCountries,
            },
        },
    },
    {
        request: {
            query: GET_CONTINENTS,
        },
        result: {
            data: {
                continents: mockContinents,
            },
        },
    },
];

const TestComponent: React.FC = () => {
    const { loading, error, countries, continents } = useFetchData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <div>
            <div data-testid="countries">{countries.map(country => country.name).join(', ')}</div>
            <div data-testid="continents">{continents.map(continent => continent.name).join(', ')}</div>
        </div>
    );
};

describe('useFetchData', () => {
    it('should return loading state initially', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <TestComponent />
            </MockedProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should return countries and continents data after loading', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <TestComponent />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('countries')).toHaveTextContent('United States, Canada');
            expect(screen.getByTestId('continents')).toHaveTextContent('North America, Europe');
        });
    });

    it('should return error state if the query fails', async () => {
        const errorMocks = [
            {
                request: {
                    query: GET_COUNTRIES,
                },
                error: new Error('An error occurred'),
            },
            {
                request: {
                    query: GET_CONTINENTS,
                },
                error: new Error('An error occurred'),
            },
        ];

        render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <TestComponent />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('Error')).toBeInTheDocument();
        });
    });
});