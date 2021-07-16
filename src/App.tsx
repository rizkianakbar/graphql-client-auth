import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { useHelloQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { data, loading } = useHelloQuery();

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return <div>{data.hello}</div>;
};

export default App;
