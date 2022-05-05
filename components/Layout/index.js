import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './Header';
import { AUTH_TOKEN } from '../../constants/constants';

let token;
if (typeof window !== 'undefined') {
  token = window.localStorage.getItem(AUTH_TOKEN);
}
const httpLink = createHttpLink({
  uri: 'http://graphql.kingnonso.com/graphql',
  headers: {
    Authorization: token ? 'JWT ' + token : '',
  },
});

// const authLink = setContext((_, { headers }) => {
//   const tokenn = window.localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `JWT ${tokenn}` : '',
//     },
//   };
// });

export const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
});

const Layout = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <Header />
      {children}
    </ApolloProvider>
  );
};

export default Layout;
