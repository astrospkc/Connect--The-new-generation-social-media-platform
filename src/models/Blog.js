import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  author: {
    type: String,
    unique: true,
    required: true,
  },

  body: {
    type: String,
  },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
