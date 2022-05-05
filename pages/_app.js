import Layout from '../components/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import '../styles/globals.css';
import './styles.css';
import { AUTH_TOKEN } from '../constants/constants';
import localforage from 'localforage';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000',
// });
// let token;
// if (typeof window !== 'undefined') {
//   token = window.localStorage.getItem(AUTH_TOKEN);
// }
// const httpLink = createHttpLink({
//   uri: 'http://graphql.kingnonso.com/graphql',
//   headers: {
//     Authorization: token ? `JWT ${token}` : '',
//   },
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// export const client = new ApolloClient({
//   // link: authLink.concat(httpLink),
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// export const authcache = localforage.createInstance({
//   name: 'authcache',
// });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
