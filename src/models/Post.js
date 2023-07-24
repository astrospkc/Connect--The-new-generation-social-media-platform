import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  // username

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
    likes: Number,
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
