import React from 'react';
import { Link } from 'react-router-dom';
import { useMeQuery } from '../generated/graphql';

interface Props {}

export const Header: React.FC<Props> = () => {
  const { data } = useMeQuery({
    fetchPolicy: 'network-only',
  });
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/signin">SignIn</Link>
      </div>
      <div>
        <Link to="/signup">SignUp</Link>
      </div>
      <div>
        <Link to="/bye">Bye</Link>
      </div>
      {data && data.me ? <div>you are login as: {data.me.email}</div> : null}
    </header>
  );
};
