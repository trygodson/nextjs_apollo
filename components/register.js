import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { AUTH_TOKEN } from '../constants/constants';
import { authcache } from '../pages/_app';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password1: String!
    $password2: String!
    $username: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      password1: $password1
      password2: $password2
      username: $username
      firstName: $firstName
      lastName: $lastName
    ) {
      token
      refreshToken
      errors
    }
  }
`;

const RegisterComponent = () => {
  const route = useRouter();
  const [formState, setFormState] = useState({
    email: '',
    password1: '',
    password2: '',
    username: '',
    firstName: '',
    lastName: '',
  });

  console.log(formState);
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      email: formState.email,
      password1: formState.password1,
      password2: formState.password2,
      username: formState.username,
      firstName: formState.firstName,
      lastName: formState.lastName,
    },
    onCompleted: data => {
      console.log(register);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(AUTH_TOKEN, data.register.token);
        route.push('/');
      }
    },
  });

  return (
    <div>
      <h4 className="mv3">{formState.login ? 'Login' : 'Sign Up'}</h4>
      <div className="flex flex-column">
        <>
          <input
            value={formState.username}
            onChange={e =>
              setFormState({
                ...formState,
                username: e.target.value,
              })
            }
            type="text"
            placeholder="Your username"
          />
          <input
            value={formState.firstName}
            onChange={e =>
              setFormState({
                ...formState,
                firstName: e.target.value,
              })
            }
            type="text"
            placeholder="Your firstname"
          />
          <input
            value={formState.lastName}
            onChange={e =>
              setFormState({
                ...formState,
                lastName: e.target.value,
              })
            }
            type="text"
            placeholder="Your Lastname"
          />
        </>

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
          value={formState.password1}
          onChange={e =>
            setFormState({
              ...formState,
              password1: e.target.value,
            })
          }
          type="password"
          placeholder="Choose a password"
        />
        <input
          value={formState.password2}
          onChange={e =>
            setFormState({
              ...formState,
              password2: e.target.value,
            })
          }
          type="password"
          placeholder="Retype password"
        />
      </div>
      <div className="flex mt3">
        <button className="pointer mr2 button" onClick={signup}>
          {'create account'}
        </button>
        <button className="pointer button" onClick={() => route.push('/login')}>
          {'already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
