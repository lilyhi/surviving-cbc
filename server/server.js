require('dotenv').config();
const express = require('express');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data(so they know what our API looks like and how it resolves requests)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware  
  // ^ this was crashing the server but added it to file now
  //ensures that every request performs an authentication check, and the updated request object will be passed to the resolvers as the context
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


// listen for connection be made with db.open()
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});


