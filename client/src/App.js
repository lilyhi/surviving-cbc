// import all components into the landing page here.
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // going to add Switch later
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
// import { ApolloProvider } from '@apollo/react-hooks';

import Home from './pages/Home';
import Header from './components/Header';
import CreatePostButton from './components/CreatePostButton';
import Post from './components/Post';

import Event from './components/Event';
import CreateEventButton from './components/CreateEventButton'
import Footer from './components/Footer';


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
            <CreatePostButton />
            <Post />
            <CreateEventButton />
            <Event />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;