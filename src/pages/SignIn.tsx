import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { setAccessToken } from '../accessToken';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';

interface Props {}

export const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        const response = await login({
          variables: {
            email,
            password,
          },
          update: (store, { data }) => {
            if (!data) {
              return null;
            }
            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                __typename: 'Query',
                me: data.login.user,
              },
            });
          },
        });

        console.log(response);

        if (response && response.data) {
          setAccessToken(response.data.login.accessToken);
        }

        history.push('/');
      }}
    >
      <div>
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};
