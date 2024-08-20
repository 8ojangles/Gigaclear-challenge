import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Continents from './Continents';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Continents />
    </ApolloProvider>
  );
}

export default App;
