// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    events: [Event]
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    title: String
    subject: String
  }

  type Event {
    _id: ID
    eventText: String
    createdAt: String
    username: String
    subject: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    events(username: String!): [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addEvent(eventText: String!): Event 
    removePost(postId: ID!): Post
    removeEvent(eventId: ID!): Event
  }
`;

module.exports = typeDefs;
