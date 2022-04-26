require("../config/connectDB");
const PostModel = require("../models/posts");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { postId } = req.body;
    console.log(postId);
    PostModel.findOne({ _id: postId }).then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  }
}
