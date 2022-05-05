import { useState } from 'react';

import Layout from '../components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import '../styles/globals.css';
import './styles.css';
import { AUTH_TOKEN } from '../constants/constants';
import { AuthProvider, useAuth } from '../constants/context';

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(false);
  const httpLink = createHttpLink({
    uri: 'http://graphql.kingnonso.com/graphql',
    // headers: {
    //   authorization: token ? 'JWT ' + token : '',
    // },
    // credentials: 'include',
  });

  const authLink = setContext((_, { headers }) => {
    // const tokenn = window.localStorage.getItem(AUTH_TOKEN);
    return {
      headers: {
        ...headers,
        authorization: token ? `JWT ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    // link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <AuthProvider value={{ token, setToken }}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />{' '}
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp;
