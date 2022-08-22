import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/:subCategory" element={<Category />}/> */}
          {/* <Route path="/:subCategory/:product" element={<Product />}/> */}
        </Routes>

        <div className="footer-container">
          <div className="footer-wrap"></div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
