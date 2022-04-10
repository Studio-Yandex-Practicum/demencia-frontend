import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
// todo: this should be imported as module
import { GlobalStyle } from "./ui/controls/style";
import { themeLight } from "./ui/theme";
import { ThemeProvider } from "styled-components";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { API_URL } from "./constants";
import { Toaster } from "react-hot-toast";

const httpLink = createUploadLink({
  uri: API_URL,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  link: httpLink,
  cache,
  resolvers: {},
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
        <Toaster />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
