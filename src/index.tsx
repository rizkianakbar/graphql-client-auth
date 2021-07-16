import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({});
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
