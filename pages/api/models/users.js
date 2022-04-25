const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("User", User);
// module.exports =   mongoose.model("User") ;
// export const PostModel = mongoose.model("User") || mongoose.model("User", User);
module.exports = mongoose.models.User || mongoose.model("User", User);

// mongoose.model("User") ||
