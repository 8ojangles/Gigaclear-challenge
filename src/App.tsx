import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Countries from './Countries';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Countries />
    </ApolloProvider>
  );
}

export default App;
