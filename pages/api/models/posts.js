const mongoose = require("mongoose");
const { Schema } = mongoose;
const Post = new Schema(
  {
    userEmail: {
      require: true,
      type: String,
    },
    userName: {
      require: true,
      type: String,
    },
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Post") || mongoose.model("Post", Post);
module.exports = mongoose.models.Post || mongoose.model("Post", Post);
