import { useContext } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './Header';
import { AUTH_TOKEN } from '../../constants/constants';
import AuthContext from '../../constants/context';
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
  const { token } = useContext(AuthContext);
  const httpLink = createHttpLink({
    uri: 'http://graphql.kingnonso.com/graphql',
    headers: {
      Authorization: token ? 'JWT ' + token : '',
      'content-type': 'application/json',
    },
    credentials: 'include',
  });

  // const authLink = setContext((_, { headers }) => {
  //   // const tokenn = window.localStorage.getItem(AUTH_TOKEN);
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `JWT ${token}` : '',

  //     },
  //   };
  // });

  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      {children}
    </ApolloProvider>
  );
};

export default Layout;
