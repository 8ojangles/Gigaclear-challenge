import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Countries from './Countries';
import { GET_COUNTRIES, GET_CONTINENTS } from './API/queries';

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

describe('Countries', () => {
    it('should render loading state initially', () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Countries />
            </MockedProvider>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render countries and continents after loading', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Countries />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('United States')).toBeInTheDocument();
            expect(screen.getByText('Canada')).toBeInTheDocument();
        });
    });

    it('should filter countries based on search input', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Countries />
            </MockedProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('United States')).toBeInTheDocument();
            expect(screen.getByText('Canada')).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText('Search by country name'), { target: { value: 'Canada' } });

        await waitFor(() => {
            expect(screen.queryByText('United States')).not.toBeInTheDocument();
            expect(screen.getByText('Canada')).toBeInTheDocument();
        });
    });

});