import React, { useContext } from 'react';
const AuthContext = React.createContext();
export const AuthProvider = AuthContext.Provider;
export default AuthContext;

// export const useAuth = () => {
//   const { token, setToken } = useContext(AuthContext);

//   return {
//     token,
//     setToken,
//   };
// };
