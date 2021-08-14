const { Schema, model } = require('mongoose');
// import the schema constructor and model function
const bcrypt = require('bcrypt');
// ^this is for password hashing

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ], 
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event'
      }
    ]
  },
  // {
  //   toJSON: {
  //     virtuals: true
  //   }
  // }
);

// set up pre-save middleware to create password (uses bcrypt)
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
