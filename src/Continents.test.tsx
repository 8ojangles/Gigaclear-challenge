import { render, screen } from '@testing-library/react';

import Continents from './Continents';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';

const CONTINENTS = gql`
  query Continents {
    continents {
      name
    }
  }
`;
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
          query: CONTINENTS,
      },
      result: {
          data: {
              continents: mockContinents,
          },
      },
  },
];
it('should display Europe in the list of the Continents', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}><Continents /></MockedProvider>);

  const item = await screen.findAllByText('Europe');

  expect(item[0]).toHaveTextContent('Europe');
});
