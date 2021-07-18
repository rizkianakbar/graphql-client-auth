import React from "react";
import { useUsersQuery } from "../generated/graphql";

interface Props {}

export const Home: React.FC<Props> = () => {
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Users:</div>
      <ul>
        {data.users.map((item) => {
          return (
            <li
              key={item.id}
            >{`${item.firstName}${item.lastName}, ${item.email}`}</li>
          );
        })}
      </ul>
    </div>
  );
};
