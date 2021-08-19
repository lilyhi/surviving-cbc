import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Home from './pages/Home';
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import NoMatch from './pages/NoMatch';
// import SinglePost from './pages/SinglePostView';
// import SingleEvent from './pages/SingleEventView';
import Footer from './components/Footer';
// import PostForm from './components/PostForm';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
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

                    <Route path='/login' exact>
                        <Login />
                    </Route>

                    <Route path='/signup' exact>
                        <Signup />
                    </Route>s

                    <Route path='/register' exact>
                        <Signup />
                    </Route>

                    <Route path='/iwillsurvive' exact>
                        <Signup />
                    </Route>

                    <Route component={NoMatch} />

                </Switch>

                <Footer />
            </Router>

        </ApolloProvider>
    );
}
export default App;