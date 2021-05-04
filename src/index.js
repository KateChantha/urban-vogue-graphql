import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient, gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

// establish connection to backend server
const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

// create a cache object to manage our app data
const cache = new InMemoryCache();

// make a client 
const client = new ApolloClient({
  link: httpLink,
  cache,
});

// test connection
// client.query({
//   query: gql`
//     {
//       getCollectionsByTitle(title: "hats") {
//         id
//         title
//         items {
//           id
//           name
//           price
//           imageUrl
//         }
//       }
//     }
//    `
// })
// .then(res => console.log(res))

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
