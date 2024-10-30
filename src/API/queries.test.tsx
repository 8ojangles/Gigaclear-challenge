import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { gql, useQuery } from '@apollo/client';
import { GET_COUNTRIES, GET_CONTINENTS } from './queries';

// Mock component to test the queries
const MockCountriesComponent = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.countries.map((country: any) => (
        <div key={country.code}>
          <h2>{country.name}</h2>
          <p>{country.capital}</p>
        </div>
      ))}
    </div>
  );
};

const MockContinentsComponent = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.continents.map((continent: any) => (
        <div key={continent.code}>
          <h2>{continent.name}</h2>
        </div>
      ))}
    </div>
  );
};

describe('GraphQL Queries', () => {
  it('should fetch and render countries', async () => {
    const mocks = [
      {
        request: {
          query: GET_COUNTRIES,
        },
        result: {
          data: {
            countries: [
              {
                code: 'US',
                name: 'United States',
                continent: { name: 'North America' },
                capital: 'Washington, D.C.',
                currency: 'USD',
                languages: [{ name: 'English' }],
                emoji: '🇺🇸',
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MockCountriesComponent />
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('United States')).toBeInTheDocument();
      expect(screen.getByText('Washington, D.C.')).toBeInTheDocument();
    });
  });

  it('should fetch and render continents', async () => {
    const mocks = [
      {
        request: {
          query: GET_CONTINENTS,
        },
        result: {
          data: {
            continents: [
              {
                code: 'NA',
                name: 'North America',
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MockContinentsComponent />
      </MockedProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('North America')).toBeInTheDocument();
    });
  });
});