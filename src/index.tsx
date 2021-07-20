import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  ApolloLink,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./accessToken";
import { App } from "./App";

const cache = new InMemoryCache({});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});
const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});
const authLinkk = setContext((_, { headers }) => {
  const accessToken = getAccessToken();
  return {
    headers: {
      authorization: accessToken ? `bearer ${accessToken}` : "",
    },
  };
});

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  operation.setContext(({ headers }: any) => ({
    headers: {
      authorization: accessToken ? `bearer ${accessToken}` : "",
      ...headers,
    },
  }));
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(link),
  // credentials: "include",
  cache,
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
