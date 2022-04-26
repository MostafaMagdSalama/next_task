require("../config/connectDB");
const PostModel = require("../models/posts");

export default function handler(req, res) {
  if (req.method === "GET") {
    PostModel.find().then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  }
}
