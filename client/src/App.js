// import all components into the landing page here.
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // going to add Switch later
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
// import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Post from './components/Post';
import Home from './pages/Home';
//import Footer from './components/Footer';

function App() {

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client} >
      <Router>
        <div className="App container">
          <Header />
          <div className="Container">
            <Switch>
            <Route exact path="/" component={Home} />
            {/* // ///////////////////////////////////////          NOT SURE ABOUT Post. or Switch ITS STILL NOT PULLING UP///////////////////// */}
            <Post />
            {/*  */}
            </Switch>

          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;