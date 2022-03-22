import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.REACT_APP_CLIENT_URI,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: true,
});
