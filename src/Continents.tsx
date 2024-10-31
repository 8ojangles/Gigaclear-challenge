// @ts-nocheck
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import React from 'react';

type ContinenntsComponent = React.Node;

const Continents: ContinenntsComponent = () => {
  const CONTINENTS = gql`
    query Continents {
      continents {
        name
      }
    }
  `;

  interface ContinentsQery {
    continents: Array<{
      name: string;
    }>;
  }

  const { loading, error, data } = useQuery<ContinentsQery>(CONTINENTS);

  const bold = 700;

  const isEurope = (c) => (c !== 'Europe' ? false : true);

  return (
    <div>
      <h3 className={`font-${bold}`}>Continents:</h3>
      {data?.continents.map(({ name }) => (
        <div className={isEurope(name) && 'text-red-800'}>{name}</div>
      ))}
    </div>
  );
};

export default Continents;
