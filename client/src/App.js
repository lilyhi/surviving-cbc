// import all components into the landing page here.
import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Suli from "./pages/Suli";
import SinglePost from "./pages/SinglePostView.js";
import SingleEvent from "./pages/SingleEventView.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // going to add Switch later
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
// import { ApolloProvider } from '@apollo/react-hooks';


// import CreatePostButton from './components/CreatePostButton';
// import Post from './components/Post';

// import Event from './components/Event';
// import CreateEventButton from './components/CreateEventButton'
import Footer from './components/Footer';
                    
const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client} >
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home' exact>
            <Home />
          </Route>

          <Route path='/signup' exact>
            <Suli />
          </Route>

          <Route path='/login' exact>
            <Suli />
          </Route>

          <Route path='/register' exact>
              <Suli />
          </Route>

          <Route path='/iwillsurvive' exact>
              <Suli />
          </Route>

          <Route path='/singlepost' exact>
              <SinglePost />
          </Route>

          <Route path='/singleevent' exact>
              <SingleEvent />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </ApolloProvider>
  );
}
export default App;