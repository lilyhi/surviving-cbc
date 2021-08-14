const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: 'You need to leave a post!',
            minlength: 1,
            maxlength: 680
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        subject : {
          type: String,
          required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Post = model('Post', postSchema);

module.exports = Post;