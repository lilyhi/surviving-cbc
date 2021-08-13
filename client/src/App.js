// import all components into the landing page here.
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // going to add Switch later
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header';
//import Footer from './components/Footer';


function App() {
  return (
    <ApolloProvider client={client} >
      <Router>
        <div className="App container">
          <Header />
          <div className="Container">
            <Switch>
            <Route exact path="/" component={Home} />
            {/*  */}
            </Switch>

          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;