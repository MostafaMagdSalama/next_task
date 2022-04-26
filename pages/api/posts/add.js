// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//connect DB
require("../config/connectDB");
const PostModel = require("../models/posts");
export default function handler(req, res) {
  if (req.method === "POST") {
    const { userEmail, userName, imageUrl, title, desc } = req.body;
    const newPost = new PostModel({
      userEmail,
      userName,
      imageUrl,
      title,
      desc,
    }).save();
    newPost.then((res) => {
      console.log(res);
    });
    res.status(200).json({ name: "John Doe" });
  }
  res.status(200).json({ name: "John Doe" });
}
