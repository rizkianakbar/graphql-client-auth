import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Routes } from "./Routes";

const cache = new InMemoryCache({});
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
