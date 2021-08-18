// import all components into the landing page here.
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InMemoryCache, createHttpLink, useQuery, gql } from "@apollo/client";
import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Home from './pages/Home';
import Suli from "./pages/Suli";
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePostView';
import SingleEvent from './pages/SingleEventView';
import Footer from './components/Footer';


// import CreatePostButton from './components/CreatePostButton';
// import Post from './components/Post';

// import Event from './components/Event';
// import CreateEventButton from './components/CreateEventButton'

const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    },
    uri: '/graphql'
});

function App() {

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