const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
    {
        eventText: {
            type: String,
            required: 'You need to enter a complete event!',
            minlength: 1,
            maxlength: 144
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    },
    // {
    //     toJSON: {
    //         getters: true
    //     }
    // }
);

/// username, datecreated, eventtext

const Event = model('Event', eventSchema);

module.exports = Event;
