import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { AUTH_TOKEN } from '../constants/constants';
import { authcache } from '../pages/_app';

const LOGIN_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      refreshToken
      errors
    }
  }
`;

const LoginComponent = () => {
  const route = useRouter();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: data => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(AUTH_TOKEN, data.loginUser.token);
        route.push('/');
      }
    },
  });

  return (
    <div>
      <h4 className="mv3">{'Login'}</h4>
      <div className="flex flex-column">
        <input
          value={formState.email}
          onChange={e =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={e =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button className="pointer mr2 button" onClick={login}>
          {'login'}
        </button>
        <button className="pointer button" onClick={e => route.push('/register')}>
          {'need to create an account?'}
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
