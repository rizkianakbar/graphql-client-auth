import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes } from "./Routes";
import { getAccessToken } from "./accessToken";

const cache = new InMemoryCache({});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
})
const link = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: 'include'
});
const authLink = setContext((_, {headers}) => {
  const accessToken = getAccessToken()
  return {
    headers: {
      authorization: accessToken ? `bearer ${accessToken}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(link),
  // credentials: "include",
  cache
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
