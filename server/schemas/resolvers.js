const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('posts')
          .populate('events');

        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('posts')
        .populate('events');
        
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('posts')
        .populate('events');
        
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    events: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Event.find(params).sort({ createdAt: -1 });
    },
    event: async (parent, { _id }) => {
      return Event.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );
    
        return post;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addEvent: async (parent, args, context) => {
      if (context.user) {
        const event = await Event.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { events: event._id } },
          { new: true }
        );
    
        return event;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }, 
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: { postId } } },
          { new: true, runValidators: true }
        );
    
        return updatedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    removeEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        const modifiedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { events: { eventId } } },
          { new: true, runValidators: true }
        );
    
        return modifiedUser;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
    
  }
};


module.exports = resolvers;