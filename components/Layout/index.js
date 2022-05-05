import { useContext } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './Header';
import { AUTH_TOKEN } from '../../constants/constants';
// import AuthContext, { useAuth } from '../../constants/context';

// const httpLink = createHttpLink({
//   uri: 'http://graphql.kingnonso.com/graphql',
//   headers: {
//     authorization: useAuth().token ? 'JWT ' + useAuth().token : '',
//   },
//   credentials: 'include',
// });

// const authLink = setContext((_, { headers }) => {
//   // const tokenn = window.localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: useAuth().token ? `JWT ${useAuth().token}` : '',
//     },
//   };
// });

// export const client = new ApolloClient({
//   // link: authLink.concat(httpLink),
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
